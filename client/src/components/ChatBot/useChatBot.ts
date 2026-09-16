import { useState, useEffect, useRef } from "react";
import { Message } from "./types";

const MAX_HISTORY_MESSAGES = 6;

const initialMessage: Message = {
  id: 1,
  role: "assistant",
  text: "Hi! I'm the Embedly AI assistant. How can I help you today?",
};

export const useChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const message = input.trim();
    if (!message || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const aiMessageId = Date.now() + 1;

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
          history: messages.slice(-MAX_HISTORY_MESSAGES).map((msg) => ({
            role: msg.role,
            text: msg.text,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `Failed to get AI response (${response.status})`);
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
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split(/\r?\n\r?\n/);
        buffer = events.pop() || "";

        for (const event of events) {
          const dataLine = event.split(/\r?\n/).find((line) => line.startsWith("data: "));
          if (!dataLine) continue;

          const jsonString = dataLine.slice(6).trim();
          if (!jsonString) continue;

          let parsed: { text?: string; done?: boolean; error?: string };
          try {
            parsed = JSON.parse(jsonString);
          } catch (error) {
            console.error("Stream parsing error:", error);
            continue;
          }

          if (parsed.error) throw new Error(parsed.error);

          if (typeof parsed.text === "string" && parsed.text.length > 0) {
            fullResponse += parsed.text;
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === aiMessageId ? { ...msg, text: fullResponse } : msg,
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
          prev.map((msg) =>
            msg.id === aiMessageId
              ? { ...msg, text: "Sorry, I couldn't generate a response." }
              : msg,
          ),
        );
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Sorry, I'm unable to respond right now. Please try again.";

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? { ...msg, text: errorMessage }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    input,
    setInput,
    isLoading,
    handleSend,
    messagesEndRef,
  };
};
