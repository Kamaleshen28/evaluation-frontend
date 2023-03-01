import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EventDetailPage from './pages/eventDetailPage/eventDetailPage';
import Home from './pages/homePage/home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:eventId' element={<EventDetailPage />} />
          {/* <Route path={GENRE_ROUTE} element={<Genre />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
