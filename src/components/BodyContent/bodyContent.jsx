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
    console.log('data HERE:', data.data);
    setEventData(data.data);

  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderAllEvents = eventData.map(eachEventData => {
    console.log('EACHEVENT: ', eachEventData);
    return (< Card key={eachEventData.id} {...eachEventData} />);
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