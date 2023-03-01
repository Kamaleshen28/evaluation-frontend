import React, { useEffect, useState } from 'react';
import './BodyContent.css';
import axios from 'axios';
import Card from '../Card/card';


export default function BodyContent() {
  const [eventData, setEventData] = useState([]);
  // const navigate = useNavigate();

  const fetchData = async () => {
    const data = await axios.get('http://localhost:8000/api/events', {
      headers: {
      }
    });

    (data.data).sort(function (a, b) {

      return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
    });

    setEventData(data.data);

  };
  useEffect(() => {
    fetchData();
  }, []);

  const upadteEventDataState = (id, updatedValue) => {
    setEventData(eventData.map(eachEventData => {
      if (eachEventData.id === id) {
        return { ...eachEventData, isBookmarked: updatedValue };
      } else {
        return { ...eachEventData };
      }
    }));
  };

  const handleOnClickBookmark = async (id, updatedValue) => {
    console.log('UP: ', updatedValue);
    const data = { 'isBookmarked': updatedValue };
    const config = {
      method: 'patch',
      url: `http://localhost:8000/api/events/${id}`,
      headers: {},
      data: data
    };
    const response = await axios(config);
    upadteEventDataState(id, updatedValue);

    console.log('BOOOOOOKMARK: ,', response);

  };

  const upadteEventDataStateForRegisteration = (id, updatedValue) => {
    setEventData(eventData.map(eachEventData => {
      if (eachEventData.id === id) {
        return { ...eachEventData, isRegistered: updatedValue };
      } else {
        return { ...eachEventData };
      }
    }));
  };


  const handleRegisterButtonClick = async (id, updatedValue) => {
    console.log('UP: ', updatedValue);
    const data = { 'isRegistered': updatedValue };
    const config = {
      method: 'patch',
      url: `http://localhost:8000/api/events/${id}`,
      headers: {},
      data: data
    };
    const response = await axios(config);
    upadteEventDataStateForRegisteration(id, updatedValue);

    console.log('BOOOOOOKMARK: ,', response);

  };

  const renderAllEvents = eventData.map(eachEventData => {
    return (< Card
      key={eachEventData.id}
      {...eachEventData}
      handleOnClickBookmark={handleOnClickBookmark}
      handleRegisterButtonClick={handleRegisterButtonClick}
    />);
  });

  return (
    <div className="body-content">
      <div className="body-content-wrapper">
        <div className="all-event-card-container">
          {renderAllEvents}

        </div>
      </div>
    </div>
  );
}