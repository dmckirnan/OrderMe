import React, { PropTypes } from 'react';
import Styles from './../../styles/Home.scss';
import { getDiscount, applyDiscount } from './../../../utils/conversions.js';

import FaClose from 'react-icons/lib/fa/close';

const CartItem = (props) => {

  if (props.verified === true) {
    return (
      <tr className='row'>
        <td className='col1'>{props.name}</td>
        <td className='col2'>{props.price}<div className="discount">{('-' + getDiscount(props.price)) + ' (10% User Discount)'}</div></td>
        <td className='col3' name={props.id}><button onClick={props.deleteOrder}><FaClose /></button></td>
      </tr>
    );
  }
  return (
    <tr className='row'>
      <td className='col1'>{props.name}</td>
      <td className='col2'>{props.price}</td>
      <td className='col3' name={props.id}><button onClick={props.deleteOrder}><FaClose /></button></td>
    </tr>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  verified: PropTypes.bool.isRequired,
  deleteOrder: PropTypes.func.isRequired,
};

export default CartItem;
