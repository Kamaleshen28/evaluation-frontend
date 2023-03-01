import React, { useEffect, useState } from 'react';
import './BodyContent.css';
import axios from 'axios';
import Card from '../Card/card';
import FilterComponent from '../FilterComponent/filterComponent';


export default function BodyContent() {

  const [formData, setFormData] = React.useState(
    {
      filter: ''
    });

  // console.log('IN BODYCONTEXT', formData);

  // ---------------
  const [searchInput, setSearchInput] = useState('');
  const [storedData, setStoredData] = useState([]);


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
    setStoredData(data.data);
    console.log('fetchOVER ');

  };
  useEffect(() => {
    fetchData();
  }, []);

  const upadteEventDataState = () => {
    if (formData.filter === 'ALL') {
      setEventData(storedData);
    } else if (formData.filter === 'BOOKMARKED') {
      setEventData(filterBookmakedData());
    } else if (formData.filter === 'REGISTERED') {
      console.log('Its REgu');
      setEventData(filterRegisteredEvent());
    } else if (formData.filter === 'SEATS AVAILABLE') {
      console.log('Its seat');
      setEventData(filterSeatsAvailableEvent());
    }
  };

  const handleOnClickBookmark = async (id, updatedValue) => {
    console.log('UPbooooo: ', updatedValue);
    const data = { 'isBookmarked': updatedValue };
    const config = {
      method: 'patch',
      url: `http://localhost:8000/api/events/${id}`,
      headers: {},
      data: data
    };
    const response = await axios(config);
    console.log('response: ', response);
    await fetchData();
    console.log('FetchDONE: ');
    upadteEventDataState();

    console.log('BOOOOOOKMARK: ,', response);

  };
  //-----------------------------

  const upadteEventDataStateForRegisteration = (id, updatedValue) => {
    // const upadtedData =
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
  // --------------------------------

  const handleSearchBoxChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value.trim() === '') {
      upadteEventDataState();
    } else {
      const filteredFoodData = storedData.filter(eachFood => ((eachFood.name).startsWith(event.target.value.trim())));
      setEventData(filteredFoodData);
    }
  };

  const filterBookmakedData = () => {
    return storedData.filter(eachEventData => {
      if (eachEventData.isBookmarked) {
        return eachEventData;
      }
    });
  };
  const filterRegisteredEvent = () => {
    return storedData.filter(eachEventData => {
      if (eachEventData.isRegistered) {
        return eachEventData;
      }
    });
  };
  const filterSeatsAvailableEvent = () => {
    return storedData.filter(eachEventData => {
      if (eachEventData.areSeatsAvailable) {
        return eachEventData;
      }
    });
  };
  //---------------------------------
  const handleRadioButtonChange = (event) => {
    const { name, value, type, checked } = event.target;
    // console.log('VALUE: ', value);
    if (value === 'ALL') {
      setEventData(storedData);
    } else if (value === 'BOOKMARKED') {
      console.log('Its boooooooo');
      setEventData(filterBookmakedData());
    } else if (value === 'REGISTERED') {
      console.log('Its REgu');
      setEventData(filterRegisteredEvent());
    } else if (value === 'SEATS AVAILABLE') {
      console.log('Its seat');
      setEventData(filterSeatsAvailableEvent());
    }


    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });



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
        <div className="filter-component-wrapper">
          <FilterComponent
            searchInput={searchInput}
            handleSearchBoxChange={handleSearchBoxChange}
            handleRadioButtonChange={handleRadioButtonChange}
            filter={formData.filter}
          />
        </div>
        <div className="all-event-card-container">
          {renderAllEvents}

        </div>
      </div>
    </div>
  );
}
