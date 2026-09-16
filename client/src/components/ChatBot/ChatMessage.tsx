import React from "react";
import ReactMarkdown from "react-markdown";
import { Message } from "./types";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-sm px-4 py-3 text-sm leading-6 ${
          isUser
            ? "bg-[#37C6E5] text-black shadow-sm"
            : "bg-white text-black border border-gray-300 shadow-sm"
        }`}
      >
        {isUser ? (
          message.text
        ) : (
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              ul: ({ children }) => <ul className="mb-2 list-disc space-y-1 pl-5">{children}</ul>,
              ol: ({ children }) => <ol className="mb-2 list-decimal space-y-1 pl-5">{children}</ol>,
              li: ({ children }) => <li>{children}</li>,
            }}
          >
            {message.text}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};
