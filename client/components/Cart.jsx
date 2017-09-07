import React from 'react';
import Styles from './../styles/Cart.scss';
import CartItem from './CartItem.jsx';

const Cart = (props) => {
  const cart = props.cart;
  const cartArr = [];
  if (!cart || cart.items.length === 0) cartArr.push(<CartItem key={0} />);
  else {
    for (let i = 0; i < cart.items.length; i += 1) {
      cartArr.push(<CartItem itemNum={i + 1} key={i} name={cart.items[i].name} price={cart.items[i].price} />);
    }
  }

  return (
    <table id='cartTable'>
      <tbody>
        {cartArr}
      </tbody>
      <p>{props.cart.total}</p>
      <button id="deleteButton" onClick={props.deleteOrder}>Delete Order</button>
      <button id='orderSubmit' onClick={props.submitOrder}>Order</button>
    </table>
  );
};

export default Cart;
