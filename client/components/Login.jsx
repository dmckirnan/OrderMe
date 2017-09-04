import React, { Component } from 'react';

const Login = props => {
  return (
    <form id="loginForm" onSubmit={props.authenticate}>
      <input name='username' type='text' placeholder="Username"></input>
      <input name='password' type='password' placeholder='Password'></input>
      <button id="loginButton" type="submit">Submit</button>
    </form>
  )
}

export default Login;
