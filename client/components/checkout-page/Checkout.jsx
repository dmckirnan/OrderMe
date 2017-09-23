import React, { PropTypes } from 'react';
/* eslint-disable import/extensions */
import Cart from './../home-page/main/Cart.jsx';

const Checkout = props =>
  (
    <div>
      <Cart cart={props.cart} auth={props.auth} verified={props.auth.verified} />
    </div>
  );

Checkout.propTypes = {
  cart: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  update: PropTypes.func.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default Checkout;
