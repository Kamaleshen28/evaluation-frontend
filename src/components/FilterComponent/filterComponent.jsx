import React, { useState } from 'react';
import './FilterComponent.css';
import proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function FilterComponent({ searchInput, handleSearchBoxChange, handleRadioButtonChange, filter }) {

  const [isFilterShown, setIsFilterShown] = useState(false);
  console.log(setIsFilterShown);
  return (
    <div className='body-header'>
      <div className="body-header-top-section">
        <div className="filter-text-with-icon">
          <FontAwesomeIcon icon={faFilter} className='filter-icon' />
          <span className="filter-text">FILTER</span>
          {isFilterShown && <FontAwesomeIcon icon={faChevronUp} onClick={() => setIsFilterShown(previousValue => !previousValue)} className='filter-icon' />}
          {!isFilterShown && <FontAwesomeIcon icon={faChevronDown} onClick={() => setIsFilterShown(previousValue => !previousValue)} className='filter-icon' />}


        </div>
        <div className="searchbar-lens">
          <input
            className='search-box'
            placeholder='EVENT NAME'
            value={searchInput}
            name='input'
            onChange={handleSearchBoxChange}
          ></input>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-button' />
        </div>
      </div>


      {isFilterShown &&
        <form className='radio-button-container'>
          <div className="all-bookmark-label">
            <div className="">
              <input
                type="radio"
                id="ALL"
                name="filter"
                value="ALL"
                checked={filter === 'ALL'}
                onChange={handleRadioButtonChange}
              />
              <label htmlFor="ALL" className="radio-button-label">ALL</label>
              <br />
            </div>

            <div className="">
              <label htmlFor="BOOKMARKED" className="radio-button-label">BOOKMARKED</label>
              <input
                type="radio"
                id="BOOKMARKED"
                name="filter"
                value="BOOKMARKED"
                checked={filter === 'BOOKMARKED'}
                onChange={handleRadioButtonChange}
              />
              <br />
            </div>




          </div>

          <div className="registered-seats-label">
            <div className="">
              <input
                type="radio"
                id="REGISTERED"
                name="filter"
                value="REGISTERED"
                checked={filter === 'REGISTERED'}
                onChange={handleRadioButtonChange}
              />
              <label htmlFor="REGISTERED" className="radio-button-label">REGISTERED</label>
              <br />
            </div>

            <div className="div">
              <label htmlFor="SEATS AVAILABLE" className="radio-button-label">SEATS AVAILABLE</label>
              <input
                type="radio"
                id="SEATS AVAILABLE"
                name="filter"
                value="SEATS AVAILABLE"
                checked={filter === 'SEATS AVAILABLE'}
                onChange={handleRadioButtonChange}
              />
              <br />
            </div>


          </div>
          <br />


        </form>}
    </div>
  );
}

FilterComponent.propTypes = {
  searchInput: proptypes.string,
  filter: proptypes.string,
  handleSearchBoxChange: proptypes.func,
  handleRadioButtonChange: proptypes.func
};