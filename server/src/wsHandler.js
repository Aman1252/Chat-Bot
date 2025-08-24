import { getGeminiResponse } from "./geminiSession.js";

export function handleWSConnection(ws) {
  console.log("✅ Client connected");

  ws.on("message", async (message) => {
    const text = message.toString();
    console.log("📩 User:", text);

    const botResponse = await getGeminiResponse(text);
    console.log("🤖 Bot:", botResponse);

    ws.send(botResponse);
  });

  ws.on("close", () => {
    console.log("❌ Client disconnected");
  });
}
