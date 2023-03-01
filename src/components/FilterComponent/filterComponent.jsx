import React from 'react';
import './FilterComponent.css';
import proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function FilterComponent({ searchInput, handleSearchBoxChange }) {


  const [formData, setFormData] = React.useState(
    {
      filter: '',
    });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

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
          checked={formData.employment === 'ALL'}
          onChange={handleChange}
        />
        <label htmlFor="ALL">ALL</label>
        <br />

        <input
          type="radio"
          id="BOOKMARKED"
          name="filter"
          value="BOOKMARKED"
          checked={formData.employment === 'BOOKMARKED'}
          onChange={handleChange}
        />
        <label htmlFor="BOOKMARKED">BOOKMARKED</label>
        <br />

        <input
          type="radio"
          id="REGISTERED"
          name="filter"
          value="REGISTERED"
          checked={formData.employment === 'REGISTERED'}
          onChange={handleChange}
        />
        <label htmlFor="REGISTERED">REGISTERED</label>
        <br />

        <input
          type="radio"
          id="SEATS AVAILABLE"
          name="filter"
          value="SEATS AVAILABLE"
          checked={formData.employment === 'SEATS AVAILABLE'}
          onChange={handleChange}
        />
        <label htmlFor="SEATS AVAILABLE">SEATS AVAILABLE</label>
        <br />
        {/* </fieldset> */}
        <br />


      </form>

      <input
        className='search-box'
        placeholder='EVENT NAME'
        value={searchInput}
        name='input'
        onChange={handleSearchBoxChange}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='search-button' />





    </div>
  );
}

FilterComponent.propTypes = {
  searchInput: proptypes.string,
  handleSearchBoxChange: proptypes.func
};