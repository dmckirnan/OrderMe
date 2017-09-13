import React from 'react';
import Styles from './../styles/Dropdown.scss';

const Dropdown = (props) => {
  return (
    <div id="dropdown">
      <span>Sort By: &#9660;</span>
      <div id="dropdown-content">
        <a href="#" id="priceLH" onClick={props.sortProducts}>Lowest Price</a>
        <a href="#" id="priceHL" onClick={props.sortProducts}>Highest Price</a>
      </div>
    </div>
  );
};

export default Dropdown;
