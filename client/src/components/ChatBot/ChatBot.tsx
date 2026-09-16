"use client";

import React from "react";
import { useChatBot } from "./useChatBot";
import { ChatBotUI } from "./ChatBotUI";

export default function AIChatbot() {
  const chatBotState = useChatBot();

  return <ChatBotUI {...chatBotState} />;
}
