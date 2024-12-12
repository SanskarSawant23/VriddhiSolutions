import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input },
            { role: "system", content: "You are a helpful assistant."}
          ],
          temperature: 0.7, 
        },
        {
          headers: {
            Authorization: `Bearer `, 
           "Content-Type": "application/json",
          }
        }
      );
      console.log(response.data)

      const botReply = response.data.choices[0].message.content;
      const botMessage = { role: "bot", content: botReply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry, something went wrong." }
      ]);
    }

    setInput("");
  };

  return (
    <div>
      {/* Chatbot Icon */}
      <div
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        💬
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-5 w-80 bg-white shadow-lg rounded-lg border">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg">
            <h3 className="text-lg font-semibold">ChatBot</h3>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border-b focus:outline-none focus:border-blue-500"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
