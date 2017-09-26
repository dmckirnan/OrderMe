import React, { PropTypes } from 'react';
import Cart from './../home-page/main/Cart.jsx';
import './../../styles/Checkout.scss';

const Checkout = props => {
  return (
    <div id="checkout-container">
      <div id="checkout-form">
        <h2>Just a little information...</h2>
        <form onSubmit={props.orderInfo}>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="phone" name="phone" placeholder="Phone Number: 7143896052" />
          <input type="submit" value="Submit Order" />
        </form>
      </div>
      <Cart
        cart={props.cart}
        auth={props.auth}
        verified={props.auth.verified}
        removeFromCart={props.removeFromCart}
      />
    </div>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  orderInfo: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default Checkout;
