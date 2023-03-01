import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="card" >
      <div className="card-wrapper">
        <div className="card-top-section">
          <img src={props.imgUrl} alt="" className="card-top-section-image" onClick={() => handleNavigation(props.id)} data-testid='clickable-area' />
        </div>

        <div className="card-middle-section" onClick={() => handleNavigation(props.id)}>
          <span className="card-event-name">{props.name}</span>
          <span className="card-event-description">{props.description}</span>
          <span className="card-evnt-venue"><span className="venue-title">VENUE:</span> {props.venue}</span>
          <span className="card-evnt-venue"><span className="date-title">DATE:</span> {props.datetime}</span>
        </div>

        <div className="card-bottom-section">
          <div className="card-bottom-upper">
            <div className="card-bottom-upper-left" onClick={() => handleNavigation(props.id)}>
              {props.isRegistered && <FontAwesomeIcon icon={faCircleCheck} className="tick-icon" />}
              <span className="registration-status-text">{props.isRegistered ? 'REGISTERED' : ''}</span>

              {!props.areSeatsAvailable && <FontAwesomeIcon icon={faCircleXmark} className="tick-icon" />}
              {!props.areSeatsAvailable && <span className="registration-status-text">NO SEATS AVAILABLE</span>}
            </div>
            <div className="card-bottom-upper-right">
              {!props.isBookmarked && <FontAwesomeIcon icon={faEdit} onClick={() => props.handleOnClickBookmark(props.id, true)} />}
              {props.isBookmarked && <FontAwesomeIcon icon={faBookmark} onClick={() => props.handleOnClickBookmark(props.id, false)} />}
              {/* <FontAwesomeIcon icon="fa-solid fa-bookmark" /> */}
              {/* <FontAwesomeIcon icon={faBookmarkRegular} /> */}
            </div>
          </div>

          {/* <div className="card-bottom-lower">
            {props.areSeatsAvailable && !props.isRegistered && <button className="card-register-button" onClick={() => props.handleRegisterButtonClick(props.id, true)}>REGISTER</button>}
            {props.areSeatsAvailable && props.isRegistered && <button className="card-register-button" onClick={() => props.handleRegisterButtonClick(props.id, false)}>UNREGISTER</button>}
          </div> */}

        </div>
      </div>
    </div>
  );
}


Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  areSeatsAvailable: PropTypes.bool.isRequired,
  handleOnClickBookmark: PropTypes.func.isRequired,
  handleRegisterButtonClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,

  datetime: PropTypes.string.isRequired
};


