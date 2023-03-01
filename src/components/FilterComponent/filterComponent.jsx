import React from 'react';
import './FilterComponent.css';
import proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function FilterComponent({ searchInput, handleSearchBoxChange, handleRadioButtonChange, filter }) {

  return (
    <div className='body-header'>


      <form >



        {/* <fieldset> */}
        <legend>FILTER</legend>
        <input
          type="radio"
          id="ALL"
          name="filter"
          value="ALL"
          checked={filter === 'ALL'}
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="ALL">ALL</label>
        <br />

        <input
          type="radio"
          id="BOOKMARKED"
          name="filter"
          value="BOOKMARKED"
          checked={filter === 'BOOKMARKED'}
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="BOOKMARKED">BOOKMARKED</label>
        <br />

        <input
          type="radio"
          id="REGISTERED"
          name="filter"
          value="REGISTERED"
          checked={filter === 'REGISTERED'}
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="REGISTERED">REGISTERED</label>
        <br />

        <input
          type="radio"
          id="SEATS AVAILABLE"
          name="filter"
          value="SEATS AVAILABLE"
          checked={filter === 'SEATS AVAILABLE'}
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="SEATS AVAILABLE">SEATS AVAILABLE</label>
        <br />
        {/* </fieldset> */}
        <br />


      </form>
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
  );
}

FilterComponent.propTypes = {
  searchInput: proptypes.string,
  filter: proptypes.string,
  handleSearchBoxChange: proptypes.func,
  handleRadioButtonChange: proptypes.func
};