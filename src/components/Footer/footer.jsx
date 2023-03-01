import React from 'react';
import './Footer.css';

export default function Footer() {


  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="theme-color-container">
          <span className="theme-text">THEMES</span>
          <span className="color-1"></span>
          <span className="color-2"></span>
          <span className="color-3"></span>
        </div>

        <div className="save-theme-button-container">
          <button className="save-theme-button">SAVE THEME</button>
        </div>


      </div>

    </div>
  );
}