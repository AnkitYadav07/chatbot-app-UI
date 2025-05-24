import React from 'react';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="theme-toggle">
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default ThemeToggle;