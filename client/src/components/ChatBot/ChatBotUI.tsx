import React from "react";
import { Message } from "./types";

interface ChatBotUIProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  handleSend: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export const ChatBotUI: React.FC<ChatBotUIProps> = ({
  isOpen,
  setIsOpen,
  messages,
  input,
  setInput,
  isLoading,
  handleSend,
  messagesEndRef,
}) => {
  return (
    <>
      {/* AI Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI assistant"
        className="fixed bottom-8 right-8 md:bottom-8 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-sm bg-black text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 flex h-[550px] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-sm bg-white shadow-2xl border border-gray-300">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-[#EBEBEB] border-b border-gray-300 px-5 py-4 text-black">
            <div>
              <h2 className="text-base font-semibold tracking-tight">AI Assistant</h2>
              <p className="mt-0.5 text-xs text-gray-500 font-mono">Powered by Embedly</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI assistant"
              className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-black transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-[#F9F9F9] p-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-sm px-4 py-3 max-w-[85%] text-sm ${
                    message.role === "user"
                      ? "bg-black text-white"
                      : "bg-white text-black border border-gray-300"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-sm bg-white border border-gray-300 px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-300 bg-white p-4">
            <div className="flex items-center gap-2 rounded-sm bg-white border border-gray-300 px-3 py-2 shadow-sm focus-within:border-black transition-colors">
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
                placeholder={isLoading ? "AI is thinking..." : "Message AI..."}
                disabled={isLoading}
                className="min-w-0 flex-1 bg-transparent px-2 py-1 text-sm text-black outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-black text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
