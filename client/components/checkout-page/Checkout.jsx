import React, { PropTypes } from 'react';
import CheckoutCart from './CheckoutCart.jsx';
import './../../styles/Checkout.scss';

const Checkout = props => {
  return (
    <div id="checkout-container">
      <CheckoutCart
        cart={props.cart}
        auth={props.auth}
        verified={props.auth.verified}
        toggleView={props.toggleView}
      />
      <div id="checkout-form">
        <h2>Ready to Order? Just a little info...</h2>
        <form onSubmit={props.orderInfo}>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="phone" name="phone" placeholder="Phone Number: 7143896052" />
          <input type="submit" value="Submit Order" />
        </form>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  orderInfo: PropTypes.func.isRequired,
  verified: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default Checkout;
