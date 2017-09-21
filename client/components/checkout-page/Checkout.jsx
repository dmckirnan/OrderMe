import React from 'react';
import Cart from '../home-page/Cart.jsx';

const Checkout = (props) => {
  return (
    <div>
      <Cart cart={props.cart} auth={props.auth} verified={props.auth.verified} />
    </div>
  );
};

Checkout.propTypes = {

};

export default Checkout;
