import React, { PropTypes } from 'react';
import Styles from './../../styles/Home.scss';
import FaSearch from 'react-icons/lib/fa/search';

const SearchForm = props => {
  return (
    <form id="searchForm" onSubmit={props.handleSearch}>
      <input id="search" name="search" placeholder="search"></input>
      <button id="searchButton" type="submit"><FaSearch /></button>
    </form>
  )
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;