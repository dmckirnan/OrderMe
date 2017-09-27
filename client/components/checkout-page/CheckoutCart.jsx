import React, { PropTypes } from 'react';

import './../../styles/Checkout.scss';
import { convertNum, findTax, processTotal } from './../../../utils/conversions';
import CartItem from './CheckoutItem.jsx';

const CheckoutCart = (props) => {
  const cart = props.cart;
  const cartArr = [];
  for (let i = 0; i < cart.items.length; i += 1) {
    cartArr.push(
      <CartItem
        verified={props.auth.verified}
        key={i.toString()}
        name={cart.items[i].name}
        price={cart.items[i].price}
      />);
  }

  return (
    <table id="checkout-table">
      <h2>Shopping Cart</h2>
      <tbody>
        {cartArr}
      </tbody>
      <p>SubTotal: <span>{props.cart !== undefined ? convertNum(props.cart.total) : ''}</span></p>
      <p>Tax @ %8.00: <span>{props.cart !== undefined ? findTax(props.cart.total) : ''}</span></p>
      <p>Grand Total: <span>{props.cart !== undefined ? processTotal(props.cart.total) : ''}</span></p>
      <button id="return-button" onClick={props.toggleView}>Return to Shopping</button>
    </table>
  );
};

CheckoutCart.propTypes = {
  cart: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  toggleView: PropTypes.func.isRequired,
};

export default CheckoutCart;
