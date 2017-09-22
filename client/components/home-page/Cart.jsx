import React, { PropTypes } from 'react';
import Styles from './../../styles/Home.scss';
/* eslint-disable import/extensions */
import { convertNum, findTax, processTotal } from './../../../utils/conversions';
import CartItem from './CartItem.jsx';

const Cart = (props) => {
  const cart = props.cart;
  const cartArr = [];

  if (!cart || cart.items.length === 0) cartArr.push(<CartItem key={0} />);
  else {
    for (let i = 0; i < cart.items.length; i += 1) {
      cartArr.push(
        <CartItem
          id={i}
          deleteOrder={props.deleteOrder}
          verified={props.auth.verified}
          itemNum={i + 1}
          key={i}
          name={cart.items[i].name}
          price={cart.items[i].price}
        />);
    }
  }

  return (
    <table id="cartTable">
      <tbody>
        {cartArr}
      </tbody>
      <p>SubTotal: <span>{props.cart !== undefined ? convertNum(props.cart.total) : ''}</span></p>
      <p>Tax @ %8.00: <span>{props.cart !== undefined ? findTax(props.cart.total) : ''}</span></p>
      <p>Grand Total: <span>{props.cart !== undefined ? processTotal(props.cart.total) : ''}</span></p>
      <button id="orderSubmit" onClick={props.submitOrder}>Checkout</button>
    </table>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  submitOrder: PropTypes.func.isRequired,
  deleteOrder: PropTypes.func.isRequired,
};

export default Cart;
