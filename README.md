# Chat-Bot
This is a simple web-based chatbot powered by Google Gemini API. 

🛠 Features
WebSocket-based real-time chat
AI responses powered by Google Generative AI (Gemini)
Beautiful chat UI with HTML + CSS
.env file support for API key & model configuration
Restricts answers only to Revolt Motors topics

⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/Aman1252/Chat-Bot.git
cd chatbot

3. Install dependencies
npm install

4. Add your Gemini API key
Create a .env file inside the server/ folder:
GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL=gemini-2.0-flash
🔑 Get your API key from Google AI Studio.

5. Start the server
node server/index.js

7. Open the chatbot in browser
Go to:
http://localhost:5000

🧠 How it Works
The frontend (index.html) connects to backend using WebSocket
User sends a message → server receives it → forwards to Gemini
Gemini responds (restricted by system instructions) → server sends back → chat window updates

🚀 Future Improvements
Store chat history in a database
Add authentication for multi-user chats
Deploy on AWS / Vercel / Render
Voice support (speech-to-text & text-to-speech)



