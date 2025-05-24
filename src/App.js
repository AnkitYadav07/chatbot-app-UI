import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import AICopilot from './components/AICopilot';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState(selectedChat ? selectedChat.messages : []);
  const [copilotMessages, setCopilotMessages] = useState([
    { id: 1, sender: "AI Copilot", text: "Hello! How can I assist you today?", time: "Now" },
    { id: 2, sender: "You", text: "Can you summarize this conversation?", time: "Now" },
    { id: 3, sender: "AI Copilot", text: "Sure, the user asked about a refund for a product purchased in November.", time: "Now" },
  ]);

  const handleSendMessage = (text) => {
    if (text.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        text,
        time: "Now",
      };
      setMessages([...messages, newMessage]);
    }
  };

  const handleSendCopilotMessage = (text) => {
    if (text.trim()) {
      const newMessage = {
        id: copilotMessages.length + 1,
        sender: "You",
        text,
        time: "Now",
      };
      setCopilotMessages([...copilotMessages, newMessage]);
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: copilotMessages.length + 2,
          sender: "AI Copilot",
          text: "I’ve noted your query. How else can I assist?",
          time: "Now",
        };
        setCopilotMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setMessages(chat.messages || []);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="app-container">
        <Sidebar setSelectedChat={handleChatSelect} />
        <div className="chat-section">
          {selectedChat ? (
            <div className="chat-content">
              <div className="chat-main">
                <ChatHeader selectedChat={selectedChat} />
                <ChatMessages messages={messages} />
                <ChatInput onSendMessage={handleSendMessage} />
              </div>
              <AICopilot
                copilotMessages={copilotMessages}
                onSendCopilotMessage={handleSendCopilotMessage}
              />
            </div>
          ) : (
            <div className="no-chat-selected">
              <h2>Select a conversation to start chatting</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;