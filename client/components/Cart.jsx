import React from 'react';
import CartItem from './CartItem.jsx';

const Cart = (props) => {
  const cart = props.cart;
  const cartArr = [];
  
  if (!cart || cart.items.length === 0) cartArr.push(<CartItem key={0}/>);
  else {
    for (let i = 0; i < cart.items.length; i += 1) {
      cartArr.push(<CartItem itemNum={i + 1} key={i} name={cart.items[i].name} price={cart.items[i].price} />);
    }
  };

  return (
    <div id='cartContainer'>
      <ul id='cart'>
        {cartArr}
      </ul>
      <p>{props.cart.total}</p>
      <button id='orderSubmit' onClick={props.submitOrder}>Order</button>
    </div>
  );
};

export default Cart;
