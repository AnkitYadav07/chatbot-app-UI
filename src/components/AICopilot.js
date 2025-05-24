import React, { useState, useEffect, useRef } from 'react';
import '../styles/AICopilot.css';

const AICopilot = ({ copilotMessages, onSendCopilotMessage }) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [copilotMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendCopilotMessage(inputText);
    setInputText('');
  };

  return (
    <div className="ai-copilot">
      <h3>AI Copilot</h3>
      <div className="copilot-messages">
        {copilotMessages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === 'You' ? 'message-you' : 'message-copilot'}`}
          >
            <div className="message-content">
              <p>{msg.text}</p>
              <span>{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="copilot-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask AI Copilot..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default AICopilot;