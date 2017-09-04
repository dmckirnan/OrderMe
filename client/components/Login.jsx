import React, { Component } from 'react';
import Styles from './../styles/Login.scss';

const Login = props => {
  return (
    <form id="loginForm" onSubmit={props.authenticate}>
      <h2>Log In to OrderMe</h2>
      <input name='username' type='text' placeholder="Username"></input>
      <input name='password' type='password' placeholder='Password'></input>
      <button id="loginButton" type="submit">Submit</button>
    </form>
  )
}

export default Login;
