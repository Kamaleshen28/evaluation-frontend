import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/');
  };
  return (
    <div className="header">
      <div className="header-wrapper">
        <span className="header-title" onClick={handleNavigation} data-testid="evenity-text">EVENTIFY</span>
      </div>
    </div>
  );
}