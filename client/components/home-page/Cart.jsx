import React, { PropTypes } from 'react';
import './../../styles/Home.scss';
import { convertNum, findTax, processTotal } from './../../../utils/conversions';
import CartItem from './CartItem.jsx';

const Cart = (props) => {
  const cart = props.cart;
  const cartArr = [];
  for (let i = 0; i < cart.items.length; i += 1) {
    cartArr.push(
      <CartItem
        identifier={i}
        deleteOrder={props.deleteOrder}
        verified={props.auth.verified}
        key={i.toString()}
        name={cart.items[i].name}
        price={cart.items[i].price}
      />);
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
