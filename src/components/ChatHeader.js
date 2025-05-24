import React from 'react';
import '../styles/ChatHeader.css';

const ChatHeader = ({ selectedChat }) => {
  return (
    <div className="chat-header">
      <h2>{selectedChat.name}</h2>
      <div className="header-actions">
        <button>Close</button>
      </div>
    </div>
  );
};

export default ChatHeader;