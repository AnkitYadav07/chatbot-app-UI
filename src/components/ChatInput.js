import React, { useState } from 'react';
import '../styles/ChatInput.css';

const ChatInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(inputText);
    setInputText('');
  };

  return (
    <div className="chat-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div className="suggested-action">
        <p>Suggested: <span>How do I get a refund?</span></p>
      </div>
    </div>
  );
};

export default ChatInput;