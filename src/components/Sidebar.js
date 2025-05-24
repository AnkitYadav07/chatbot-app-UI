import React from 'react';
import { conversations } from '../dummyData';
import '../styles/Sidebar.css';

const Sidebar = ({ setSelectedChat }) => {
  return (
    <div className="sidebar">
      <h2>Your Inbox</h2>
      <div className="conversation-list">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="conversation-item"
            onClick={() => setSelectedChat(conv)}
          >
            <div className="avatar">{conv.name[0]}</div>
            <div className="conv-info">
              <h3>{conv.name}</h3>
              <p>{conv.message}</p>
            </div>
            <div className="conv-meta">
              <span>{conv.time}</span>
              {conv.unread > 0 && <span className="unread-count">{conv.unread}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;