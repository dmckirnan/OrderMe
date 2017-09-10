import React from 'react';
import Styles from './../styles/Cart.scss';
import ItemStyles from './../styles/CartItem.scss';
import { convertNum, findTax, processTotal } from './../../utils/conversions.js';
import CartItem from './CartItem.jsx';

const Cart = (props) => {
  const cart = props.cart;
  const cartArr = [];

  if (!cart || cart.items.length === 0) cartArr.push(<CartItem key={0} />);
  else {
    for (let i = 0; i < cart.items.length; i += 1) {
      cartArr.push(<CartItem verified={props.auth.verified} itemNum={i + 1} key={i} name={cart.items[i].name} price={cart.items[i].price} />);
    }
  }

  return (
    <table id='cartTable'>
      <tbody>
        {cartArr}
      </tbody>
      <p>SubTotal: <span>{props.cart !== undefined ? convertNum(props.cart.total) : ''}</span></p>
      <p>Tax @ %8.00: <span>{props.cart !== undefined ? findTax(props.cart.total) : ''}</span></p>
      <p>Grand Total: <span>{props.cart !== undefined ? processTotal(props.cart.total): ''}</span></p>
      <button id="deleteButton" onClick={props.deleteOrder}>Delete Order</button>
      <button id='orderSubmit' onClick={props.submitOrder}>Order</button>
    </table>
  );
};

export default Cart;
