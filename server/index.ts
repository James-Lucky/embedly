import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import trustDentContext from "./data/trustDentContext";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing from the environment variables.");
}

const ai = new GoogleGenAI({
  apiKey,
});

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Trust Dent API is running",
  });
});

app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const {
      message,
      history,
    } = req.body as {
      message?: unknown;
      history?: unknown;
    };

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const conversationHistory = Array.isArray(history)
      ? history
          .filter(
            (item): item is { role: "user" | "assistant"; text: string } =>
              typeof item === "object" &&
              item !== null &&
              "role" in item &&
              "text" in item &&
              (item.role === "user" || item.role === "assistant") &&
              typeof item.text === "string"
          )
          .slice(-6)
          .map((item) => ({
            role: item.role === "assistant" ? "model" : "user",
            parts: [
              {
                text: item.text,
              },
            ],
          }))
      : [];

    const contents = [
      ...conversationHistory,
      {
        role: "user" as const,
        parts: [
          {
            text: message,
          },
        ],
      },
    ];

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");

    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: trustDentContext,
        maxOutputTokens: 700,
      },
    });

    for await (const chunk of responseStream) {
      const text = chunk.text;

      if (!text) {
        continue;
      }

      res.write(
        `data: ${JSON.stringify({
          text,
        })}\n\n`
      );
    }

    res.write(
      `data: ${JSON.stringify({
        done: true,
      })}\n\n`
    );

    res.end();
  } catch (error) {
    console.error("Gemini API error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        error: "Failed to get response from Gemini",
      });
    }

    res.write(
      `data: ${JSON.stringify({
        error: "Failed to continue AI response",
      })}\n\n`
    );

    res.end();
  }
});

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});