import React, { PropTypes } from 'react';
import Styles from './../../styles/Create.scss';

const Create = (props) => {
  const text = props.redirect === true ? 'Username Already Exists' : '';

  return (
    <form id="createForm" onSubmit={props.create}>
      <h2>Create An Account</h2>
      <h3>{text}</h3>
      <input name="username" type="text" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button id="createButton" type="submit">Create</button>
    </form>
  );
};

Create.propTypes = {
  create: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default Create;
