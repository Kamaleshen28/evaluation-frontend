import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FullEventDetailsCard from '../../components/FullEventDetailsCard/fullEventDetailsCard';
import Header from '../../components/Header/header';
import axios from 'axios';
import './EventDetailPage.css';

export default function EventDetailPage() {


  const [eventData, setEventData] = useState([]);
  const { eventId } = useParams();

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
        console.log('IDHETRE: ', id, updatedValue);
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

  const renderSingleCard = eventData.map(eachEventData => {
    if (Number(eachEventData.id) === Number(eventId)) {
      return (< FullEventDetailsCard
        key={eachEventData.id}
        {...eachEventData}
        handleOnClickBookmark={handleOnClickBookmark}
        handleRegisterButtonClick={handleRegisterButtonClick}
      />);

    }
  });

  return (
    <div className="event-detail-page">
      <div className="header-event-detail-page-wrapper">
        <Header />

      </div>
      <div className="event-detail-page-card-container">
        {renderSingleCard}
      </div>
    </div>
  );
}