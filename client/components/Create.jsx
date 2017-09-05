import React, { Component } from 'react';
import Styles from './../styles/Create.scss';

const Create = props => {
  let text = props.redirect === true ? 'Username Already Exists' : '';

  return (
    <form id="createForm" onSubmit={props.create}>
      <h2>Create An Account</h2>
      <h3>{text}</h3>
      <input name='username' type='text' placeholder='Username'></input>
      <input name='password' type='password' placeholder='Password'></input>
      <button id="createButton" type="submit">Create</button>
    </form>
  )
}

export default Create;