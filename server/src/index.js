import express from "express";
import { WebSocketServer } from "ws";
import { handleWSConnection } from "./wsHandler.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Serve frontend (vanilla HTML/JS) from ../client
app.use(express.static(path.join(__dirname, "../../web")));

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// WebSocket
const wss = new WebSocketServer({ server });
wss.on("connection", handleWSConnection);
