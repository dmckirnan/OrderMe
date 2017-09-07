import React, { Component } from 'react';
import Styles from './../styles/Login.scss';

const Login = (props) => {
  const text = props.redirect === true ? 'Login Attempt Unsuccessful' : '';

  return (
    <form id="loginForm" onSubmit={props.auth}>
      <h2>Log In to OrderMe</h2>
      <h3>{text}</h3>
      <input name="username" type="text" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button id="loginButton" type="submit">Login</button>
      <a id="createLink" onClick={props.toggleView}>New to Order Me? Create An Account!</a>
    </form>
  );
};

export default Login;
