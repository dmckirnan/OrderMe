import React, { Component } from 'react';
import Styles from './../styles/Login.scss';

const Login = props => {
  return (
    <form id="loginForm" onSubmit={props.auth}>
      <h2>Log In to OrderMe</h2>
      <input name='username' type='text' placeholder="Username"></input>
      <input name='password' type='password' placeholder='Password'></input>
      <button id="loginButton" type="submit">Login</button>
      <a onClick={props.create}>New to Order Me? Create An Account!</a>
    </form>
  )
}

export default Login;