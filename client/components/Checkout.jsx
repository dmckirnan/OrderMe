import React from 'react';
import Cart from './Cart.jsx';

const Checkout = (props) => {
  return (
    <div>
      <Cart cart={props.cart} auth={props.auth} verified={props.auth.verified} />
    </div>
  );
};

export default Checkout;
