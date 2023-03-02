/* eslint-disable indent */
import React, { useContext, useEffect, useState } from 'react';
import { eventifyContext } from '../../context/eventifyContext';
import './Footer.css';
import axios from 'axios';

export default function Footer() {
  const { theme, setTheme } = useContext(eventifyContext);
  const [currentThemeId, setCurrentThemeId] = useState({
    id: 0,
    themeSaved: false
  });

  const fetchThemeData = async () => {
    const data = await axios.get('http://localhost:8000/api/themes', {
      headers: {
      }
    });
    (data.data.themes).forEach(eacThemeData => {
      if (eacThemeData.id === data.data.preferredThemeId) {
        setTheme(eacThemeData.colorHexCode);
        setCurrentThemeId(previousData => {
          return { ...previousData, id: eacThemeData.id };
        });
      }
    });
  };
  useEffect(() => {
    fetchThemeData();
  }, []);

  let colorClass = '';
  switch (theme) {
    case '#0000FF': colorClass = 'footer blue-theme'; break;
    case '#000000': colorClass = 'footer black-theme'; break;
    case '#800080': colorClass = 'footer violet-theme'; break;
    case '#9B9999': colorClass = 'footer gray-theme';
  }

  const handleSaveTheme = async () => {
    const data = { 'preferredThemeId': currentThemeId.id };
    const config = {
      method: 'put',
      url: 'http://localhost:8000/api/themes',
      headers: {},
      data: data
    };
    const response = await axios(config);
    setCurrentThemeId(previousData => {
      return { ...previousData, themeSaved: true };
    });
    console.log(response);
  };

  const changeThemeOnClick = (id, currentTheme) => {
    setCurrentThemeId(previousData => {
      return { ...previousData, id: id };
    });
    setTheme(currentTheme);
  };

  return (
    <div className={colorClass}>
      {/* <div className="footer-wrapper"> */}
      <div className="theme-color-container">
        <span className="theme-text">THEMES</span>
        {currentThemeId.id != 1 && <span className="color-1" onClick={() => changeThemeOnClick(1, '#000000')}></span>}
        {currentThemeId.id != 2 && <span className="color-2" onClick={() => changeThemeOnClick(2, '#800080')}></span>}
        {currentThemeId.id != 3 && <span className="color-3" onClick={() => changeThemeOnClick(3, '#0000FF')}></span>}
        {currentThemeId.id != 4 && <span className="color-4" onClick={() => changeThemeOnClick(4, '#9B9999')}></span>}
      </div>

      <div className="save-theme-button-container">
        {!currentThemeId.themeSaved && <button className="save-theme-button" onClick={handleSaveTheme} >SAVE THEME</button>}
      </div>


      {/* </div> */}

    </div>
  );
}