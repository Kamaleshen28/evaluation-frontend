/* eslint-disable indent */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventifyContext } from '../../context/eventifyContext';
import './Header.css';

export default function Header() {

  const { theme } = useContext(eventifyContext);
  let colorClass = '';
  switch (theme) {
    case '#0000FF': colorClass = 'header-wrapper blue-theme'; break;
    case '#000000': colorClass = 'header-wrapper black-theme'; break;
    case '#800080': colorClass = 'header-wrapper violet-theme'; break;
    case '#9B9999': colorClass = 'header-wrapper gray-theme';
  }

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/');
  };
  return (
    // <div className="header">
      <div className={colorClass} >
        <span className="header-title" onClick={handleNavigation} data-testid="evenity-text">EVENTIFY</span>
      {/* </div> */}
    </div>
  );
}