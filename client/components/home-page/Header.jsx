import React, { PropTypes } from 'react';
import './../../styles/Home.scss';

const Header = (props) => {
  const verified = props.auth === undefined ? false : props.auth.verified;
  if (verified === true) {
    return (
      <header id="homeHeader">
        <button id="logoutButton" onClick={props.handleLogout}>Log Out</button>
        <p id="welcomeTag">Welcome Back {props.auth.username}</p>
        <h1 id="title">OrderMe</h1>
      </header>
    );
  }
  return (
    <header id="homeHeader">
      <button id="homeLogin" onClick={props.toggleView}>Log In</button>
      <button id="homeCreate" onClick={props.toggleView}>Sign Up</button>
      <h1 id="title">OrderMe</h1>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
