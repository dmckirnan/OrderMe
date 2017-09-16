import React from 'react';
import Cart from './Cart.jsx';

const Checkout = (props) => {
  return (
    <div>
      <Cart cart={props.cart} auth={props.auth} />
    </div>
  );
};

export default Checkout;
console.log('this is a test');