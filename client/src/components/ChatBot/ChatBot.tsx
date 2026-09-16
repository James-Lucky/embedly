"use client";

import { useState, useRef } from "react";
import { ChatBotUI } from "./ChatBotUI";
import { Message } from "./types";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", text: "Hello! How can I help you today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newUserMessage: Message = { id: Date.now(), role: "user", text: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    // Dummy response for UI demonstration
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "assistant", text: "This is a dummy response. The logic has been removed as requested." }
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ChatBotUI
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      messages={messages}
      input={input}
      setInput={setInput}
      isLoading={isLoading}
      handleSend={handleSend}
      messagesEndRef={messagesEndRef}
    />
  );
}
