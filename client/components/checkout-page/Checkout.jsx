import React, { PropTypes } from 'react';
import Cart from '../home-page/Cart.jsx';

const Checkout = (props) => {
  return (
    <div>
      <Cart cart={props.cart} auth={props.auth} verified={props.auth.verified} />
    </div>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default Checkout;
