import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-top-section">
          <img src={props.imgUrl} alt="" className="card-top-section-image" />
        </div>

        <div className="card-middle-section">
          <span className="card-event-name">{props.name}</span>
          <span className="card-event-description">{props.description}</span>
          <span className="card-evnt-venue">{props.venue}</span>
          <span className="card-evnt-venue">{props.datetime}</span>
        </div>

        <div className="card-bottom-section">
          <div className="card-bottom-upper">
            <div className="card-bottom-upper-left">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span className="registration-status-text">Registered</span>
            </div>
            <div className="card-bottom-upper-right">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>

          <div className="card-bottom-lower">
            <button className="card-register-button">Register</button>
          </div>

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
  datetime: PropTypes.instanceOf(Date)
};