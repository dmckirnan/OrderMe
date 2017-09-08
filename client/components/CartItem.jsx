import React from 'react';
import Styles from './../styles/CartItem.scss';
import { getDiscount, applyDiscount } from './../../utils/conversions.js';


const CartItem = (props) => {

  if (props.verified === true) {
    return (
      <tr className='row'>
        <td className='col1'>{props.name}</td>
        <td className='col2'>{props.price}<div className="discount">{('-' + getDiscount(props.price)) + ' (10% User Discount)'}</div></td>
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
