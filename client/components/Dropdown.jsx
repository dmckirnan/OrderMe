import React from 'react';
import Styles from './../styles/Dropdown.scss';

const Dropdown = (props) => {
  return (
    <div id="dropdown">
      <span>Sort By: &#9660;</span>
      <div id="dropdown-content">
        <a href="#" id="priceLH" onClick={props.sortProducts}>Price Lowest-Highest</a>
        <a href="#" id="priceHL" onClick={props.sortProducts}>Price Highest-Lowest</a>
      </div>
    </div>
  );
};

export default Dropdown;
