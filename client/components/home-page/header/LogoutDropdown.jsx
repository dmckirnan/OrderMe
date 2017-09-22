import React, { PropTypes } from 'react';
import './../../../styles/Header.scss';

const LogoutDropdown = props =>
  (
    <div id="logout-dropdown">
      <span>Sort By: &#9660;</span>
      <div id="logout-dropdown-content">
        <a href="#" id="logoutButton" onClick={props.handleLogout}>Lowest Price</a>
      </div>
    </div>
  );

LogoutDropdown.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default LogoutDropdown;
