import React, { useEffect, useRef } from 'react';
import '../styles/ChatMessages.css';

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-messages">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${msg.sender === 'You' ? 'message-you' : 'message-other'}`}
        >
          <div className="message-content">
            <p>{msg.text}</p>
            <span>{msg.time}</span>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;