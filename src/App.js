import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { RecordShelfContextProvider } from './context/eventifyContext';
import EventDetailPage from './pages/eventDetailPage/eventDetailPage';
import Home from './pages/homePage/home';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <RecordShelfContextProvider>
              <Home />
            </RecordShelfContextProvider>
          } />
          <Route path='/:eventId' element={
            <RecordShelfContextProvider>
              <EventDetailPage />
            </RecordShelfContextProvider>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
