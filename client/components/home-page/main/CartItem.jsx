import React, { PropTypes } from 'react';

import './../../../styles/Home.scss';
import { getDiscount } from './../../../../utils/conversions';

const CartItem = (props) => {
  if (props.verified === true) {
    return (
      <tr className="row">
        <td className="col1">{props.name}</td>
        <td className="col2">{props.price}<div className="discount">{`- ${getDiscount(props.price)} (10% User Discount)`}</div></td>
        <td className="col3"><button id={props.identifier} onClick={props.deleteOrder}>X</button></td>
      </tr>
    );
  }
  return (
    <tr className="row">
      <td className="col1">{props.name}</td>
      <td className="col2">{props.price}</td>
      <td className="col3"><button id={props.identifier} onClick={props.deleteOrder}>X</button></td>
    </tr>
  );
};

CartItem.propTypes = {
  identifier: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  verified: PropTypes.bool.isRequired,
  deleteOrder: PropTypes.func.isRequired,
};

export default CartItem;
