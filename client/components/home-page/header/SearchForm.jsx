import React, { PropTypes } from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import './../../../styles/Header.scss';

const SearchForm = props =>
  (
    <form id="searchForm" onSubmit={props.handleSearch}>
      <input id="search" name="search" placeholder="search" />
      <button id="searchButton" type="submit"><FaSearch /></button>
    </form>
  );

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
