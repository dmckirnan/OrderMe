import React from 'react';
import { getDiscount, applyDiscount } from './../../utils/conversions.js';


const CartItem = (props) => {
  let price = props.verified ? applyDiscount(props.price) : props.price;

  if (props.verified === true) {
    return (
      <tr className='row'>
        <td className='col1'>{props.name}</td>
        <td className='col2'>{price}<div className="discount">{'-' + conversions.getDiscount(props.price)}</div></td>
      </tr>
    );
  }
  return (
    <tr className='row'>
      <td className='col1'>{props.name}</td>
      <td className='col2'>{props.price}</td>
    </tr>
  );
};

export default CartItem;
