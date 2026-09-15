"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const STORAGE_KEY = "embedly";
const MAX_STORED_MESSAGES = 50;
const MAX_HISTORY_MESSAGES = 6;

const initialMessage: Message = {
  id: 1,
  role: "assistant",
  text: "Hi! I'm the Embedly AI assistant. How can I help you today?",
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Prevent saving before localStorage
  const [isHydrated, setIsHydrated] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Restore chat history from localStorage
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY);

      if (!savedMessages) {
        setIsHydrated(true);
        return;
      }

      const parsedMessages: unknown = JSON.parse(savedMessages);

      if (!Array.isArray(parsedMessages) || parsedMessages.length === 0) {
        setIsHydrated(true);
        return;
      }

      const validMessages = parsedMessages.filter(
        (message): message is Message =>
          typeof message === "object" &&
          message !== null &&
          "id" in message &&
          "role" in message &&
          "text" in message &&
          typeof message.id === "number" &&
          (message.role === "user" || message.role === "assistant") &&
          typeof message.text === "string",
      );

      if (validMessages.length > 0) {
        setMessages(validMessages.slice(-MAX_STORED_MESSAGES));
      }
    } catch (error) {
      console.error("Failed to restore chat history:", error);

      // Remove corrupted data
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save chat history only AFTER localStorage.
  useEffect(() => {
    if (!isHydrated) return;

    try {
      const messagesToStore = messages.slice(-MAX_STORED_MESSAGES);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(messagesToStore));
    } catch (error) {
      console.error("Failed to save chat history:", error);
    }
  }, [messages, isHydrated]);

  // Automatically scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const message = input.trim();

    if (!message || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: message,
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const aiMessageId = Date.now() + 1;

    // Add empty assistant message for streaming
    setMessages((prev) => [
      ...prev,
      {
        id: aiMessageId,
        role: "assistant",
        text: "",
      },
    ]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,

          history: messages.slice(-MAX_HISTORY_MESSAGES).map((chatMessage) => ({
            role: chatMessage.role,
            text: chatMessage.text,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(
          errorData?.error || `Failed to get AI response (${response.status})`,
        );
      }

      if (!response.body) {
        throw new Error("Streaming response is not available.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let buffer = "";
      let fullResponse = "";
      let streamCompleted = false;

      while (!streamCompleted) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        buffer += decoder.decode(value, {
          stream: true,
        });

        const events = buffer.split(/\r?\n\r?\n/);

        buffer = events.pop() || "";

        for (const event of events) {
          const dataLine = event
            .split(/\r?\n/)
            .find((line) => line.startsWith("data: "));

          if (!dataLine) {
            continue;
          }

          const jsonString = dataLine.slice(6).trim();

          if (!jsonString) {
            continue;
          }

          let parsed: {
            text?: string;
            done?: boolean;
            error?: string;
          };

          try {
            parsed = JSON.parse(jsonString);
          } catch (error) {
            console.error("Stream parsing error:", error);
            continue;
          }

          if (parsed.error) {
            throw new Error(parsed.error);
          }

          if (typeof parsed.text === "string" && parsed.text.length > 0) {
            fullResponse += parsed.text;

            setMessages((prev) =>
              prev.map((chatMessage) =>
                chatMessage.id === aiMessageId
                  ? {
                      ...chatMessage,
                      text: fullResponse,
                    }
                  : chatMessage,
              ),
            );
          }

          if (parsed.done) {
            streamCompleted = true;
            break;
          }
        }
      }

      buffer += decoder.decode();

      if (!fullResponse.trim()) {
        setMessages((prev) =>
          prev.map((chatMessage) =>
            chatMessage.id === aiMessageId
              ? {
                  ...chatMessage,
                  text: "Sorry, I couldn't generate a response.",
                }
              : chatMessage,
          ),
        );
      }
    } catch (error) {
      console.error("Chatbot error:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Sorry, I'm unable to respond right now. Please try again.";

      // Replace empty/partial assistant message with error
      setMessages((prev) =>
        prev.map((chatMessage) =>
          chatMessage.id === aiMessageId
            ? {
                ...chatMessage,
                text: errorMessage,
              }
            : chatMessage,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* AI Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI assistant"
        className="fixed bottom-28 right-9 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#49327D] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
      >
        ✦
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#49327D] px-5 py-4 text-white">
            <div>
              <h2 className="text-base font-semibold">Dental AI Assistant</h2>

              <p className="mt-0.5 text-xs text-white/70">Ask us anything</p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI assistant"
              className="flex h-8 w-8 items-center justify-center rounded-full text-xl transition hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-[#F8FAFF] p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-[#49327D] text-white"
                      : "rounded-bl-md bg-white text-[#17213A] shadow-sm ring-1 ring-black/5"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0">{children}</p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold">{children}</strong>
                        ),
                        ul: ({ children }) => (
                          <ul className="mb-2 list-disc space-y-1 pl-5">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="mb-2 list-decimal space-y-1 pl-5">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => <li>{children}</li>,
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  ) : (
                    message.text
                  )}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                  <div className="flex items-center gap-1">
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-[#49327D]"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-[#49327D]"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-[#49327D]"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 bg-white p-3">
            <div className="flex items-center gap-2 rounded-2xl bg-[#F5F7FC] px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={
                  isLoading ? "AI is thinking..." : "Ask something..."
                }
                disabled={isLoading}
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-[#17213A] outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#49327D] text-white transition hover:bg-[#3d296b] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "..." : "→"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



