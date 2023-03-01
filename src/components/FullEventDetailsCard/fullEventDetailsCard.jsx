import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './FullEventDetailsCard.css';

export default function FullEventDetailsCard(props) {

  return (
    <div className="full-card" >
      <div className="full-card-wrapper">
        <div className="full-card-top-section">
          <img src={props.imgUrl} alt="" className="full-card-top-section-image" />
        </div>

        <div className="full-card-middle-section">
          <span className="full-card-event-name">{props.name}</span>
          <span className="full-card-event-description">{props.description}</span>
          <span className="full-card-evnt-venue"><span className="venue-title">VENUE:</span> {props.venue}</span>
          <span className="full-card-evnt-venue"><span className="date-title">DATE:</span> {props.datetime}</span>
        </div>

        <div className="full-card-bottom-section">
          <div className="full-card-bottom-upper">
            <div className="full-card-bottom-upper-left">
              {props.isRegistered && <FontAwesomeIcon icon={faCircleCheck} className="full-tick-icon" />}
              <span className="full-registration-status-text">{props.isRegistered ? 'REGISTERED' : ''}</span>

              {!props.areSeatsAvailable && <FontAwesomeIcon icon={faCircleXmark} className="full-tick-icon" />}
              {!props.areSeatsAvailable && <span className="full-registration-status-text">NO SEATS AVAILABLE</span>}
            </div>
            <div className="full-card-bottom-upper-right">
              {!props.isBookmarked && <FontAwesomeIcon icon={faEdit} onClick={() => props.handleOnClickBookmark(props.id, true)} />}
              {props.isBookmarked && <FontAwesomeIcon icon={faBookmark} onClick={() => props.handleOnClickBookmark(props.id, false)} />}
              {/* <FontAwesomeIcon icon="fa-solid fa-bookmark" /> */}
              {/* <FontAwesomeIcon icon={faBookmarkRegular} /> */}
            </div>
          </div>

          <div className="full-card-bottom-lower">
            {props.areSeatsAvailable && !props.isRegistered && <button className="full-card-register-button" onClick={() => props.handleRegisterButtonClick(props.id, true)}>REGISTER</button>}
            {props.areSeatsAvailable && props.isRegistered && <button className="full-card-register-button" onClick={() => props.handleRegisterButtonClick(props.id, false)}>UNREGISTER</button>}
          </div>

        </div>
      </div>
    </div>
  );
}


FullEventDetailsCard.propTypes = {
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


