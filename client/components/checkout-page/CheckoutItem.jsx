import React, { PropTypes } from 'react';

import './../../styles/Checkout.scss';
import { getDiscount } from './../../../utils/conversions';

const CheckoutItem = (props) => {
  if (props.verified === true) {
    return (
      <tr className="checkout-row">
        <td className="checkout-col1">{props.name}</td>
        <td className="checkout-col2">{props.price}<div className="discount">{`- ${getDiscount(props.price)} (10% User Discount)`}</div></td>
      </tr>
    );
  }
  return (
    <tr className="checkout-row">
      <td className="checkout-col1">{props.name}</td>
      <td className="checkout-col2">{props.price}</td>
    </tr>
  );
};

CheckoutItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default CheckoutItem;
