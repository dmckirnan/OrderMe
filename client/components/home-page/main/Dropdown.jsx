import React, { PropTypes } from 'react';
import './../../../styles/Dropdown.scss';

const Dropdown = props =>
  (
    <div id="dropdown">
      <span>Sort By: &#9660;</span>
      <div id="dropdown-content">
        <a href="#" id="priceLH" onClick={props.sortProducts}>Lowest Price</a>
        <a href="#" id="priceHL" onClick={props.sortProducts}>Highest Price</a>
      </div>
    </div>
  );

Dropdown.propTypes = {
  sortProducts: PropTypes.func.isRequired,
};

export default Dropdown;
