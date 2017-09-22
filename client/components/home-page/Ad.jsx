import React, { PropTypes } from 'react';
import './../../styles/Home.scss';

const Ad = (props) => {
  const verified = props.auth === undefined ? false : props.auth.verified;
  if (verified === true) {
    return (
      <div id="log-ad">OrderMe Prime is Saving You 10%!</div>
    );
  }
  return (
    <div id="ad">Sign-In for 10% Off All Items</div>
  );
};

Ad.propTypes = {
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Ad;
