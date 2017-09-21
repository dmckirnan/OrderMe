import React, { PropTypes } from 'react';
import Styles from './../../styles/Home.scss';

const Header = props => {
  let verified = props.auth === undefined ? false : props.auth.verified;
  if (verified === true) {
    return (
      <header id="homeHeader">
        <button id="logoutButton" onClick={props.handleLogout}>Log Out</button>
        <p id="welcomeTag">Welcome Back {props.auth.username}</p>
        <h1 id="title" onClick={props.toggleView} >OrderMe</h1>
      </header>
    );
  } else {
    return (
      <header id="homeHeader">
        <button id="homeLogin" onClick={props.toggleView}>Log In</button>
        <button id="homeCreate" onClick={props.toggleView}>Sign Up</button>
        <h1 id="title" onClick={props.toggleView} >OrderMe</h1>
      </header>
    );
  }
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  handleLogout: PropTypes.func,
  toggleView: PropTypes.func,
};

export default Header;