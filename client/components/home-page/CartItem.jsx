import React, { PropTypes } from 'react';
import FaClose from 'react-icons/lib/fa/close';

import Styles from './../../styles/Home.scss';
import { getDiscount } from './../../../utils/conversions';

const CartItem = (props) => {
  if (props.verified === true) {
    return (
      <tr className="row">
        <td className="col1">{props.name}</td>
        <td className="col2">{props.price}<div className="discount">{`- ${getDiscount(props.price)} (10% User Discount)`}</div></td>
        <td className="col3" name={props.id}><button onClick={props.deleteOrder}><FaClose /></button></td>
      </tr>
    );
  }
  return (
    <tr className="row">
      <td className="col1">{props.name}</td>
      <td className="col2">{props.price}</td>
      <td className="col3" name={props.id}><button onClick={props.deleteOrder}><FaClose /></button></td>
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

CartItem.defaultProps = {
  id: 0,
};

export default CartItem;
