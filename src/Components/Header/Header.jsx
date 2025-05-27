// Header.jsx
import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <button className="add-button">
          <Plus size={18} />
          <span>Add</span>
        </button>
        <div className="user-profile">
          <div className="avatar">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback-avatar.png';
              }}
            />
          </div>
          <div className="user-info">
            <span className="user-name">Kishore</span>
            <span className="user-role">Patient</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
