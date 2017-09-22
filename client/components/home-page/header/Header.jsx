import React, { PropTypes } from 'react';
import SearchForm from './../SearchForm.jsx';
import LogoutDropdown from './LogoutDropdown.jsx';

// <button id="logoutButton" onClick={props.handleLogout}>Log Out</button>

const Header = (props) => {
  const verified = props.auth === undefined ? false : props.auth.verified;
  if (verified === true) {
    return (
      <header id="homeHeader">
        <div id="header-left">
          <h1 id="title">OrderMe</h1>
        </div>
        <div id="header-center">
          <SearchForm handleSearch={props.handleSearch} />
        </div>
        <div id="header-right">
          <p id="welcomeTag">Welcome Back {props.auth.username}</p>
          <LogoutDropdown handleLogout={props.handleLogout} />
        </div>
      </header>
    );
  }
  return (
    <header id="homeHeader">
      <div id="header-left">
        <h1 id="title">OrderMe</h1>
      </div>
      <div id="header-center">
        <SearchForm handleSearch={props.handleSearch} />
      </div>
      <div id="header-right">
        <button id="homeLogin" onClick={props.toggleView}>Log In</button>
        <button id="homeCreate" onClick={props.toggleView}>Sign Up</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  handleSearch: PropTypes.func.isRequired,
  handleLogout: PropTypes.func,
  toggleView: PropTypes.func,
};

Header.defaultProps = {
  handleLogout: () => {
    /* eslint-disable no-console */
    console.log('handleLogout not passed down');
    /* eslint-enable no-console */
  },
  toggleView: () => {
    /* eslint-disable no-console */
    console.log('toggleView not passed down');
    /* eslint-enable no-console */
  },
};

export default Header;
