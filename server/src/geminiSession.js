import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

// Load key and model from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: process.env.GEMINI_MODEL || "gemini-2.0-flash",
  systemInstruction: `
    You are a helpful AI assistant for Revolt Motors.
    - If the user says hi/hello, greet them and also say I am your assistant to help you with Revolt Motors details .
    - Always keep responses clear, professional, and friendly.
    - If the user asks about anything outside Revolt Motors, politely say: 
    "Sorry, But I'm here to help you with Revolt Motors only."
  `,
});

export async function getGeminiResponse(userMessage) {
  try {
    const result = await model.generateContent(userMessage);
    return result.response.text();
  } catch (err) {
    console.error(" Gemini error:", err);
    return "Sorry, I had trouble generating a response.";
  }
}