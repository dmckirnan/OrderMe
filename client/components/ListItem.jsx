import React from 'react';
import Styles from '../styles/ListItem.scss';
import { applyDiscount } from './../../utils/conversions.js';

const ListItem = (props) => {
  if (props.verified === true) {
    let price = Number(applyDiscount(props.price));
    return (
    <li className="listItem">
      <p>{props.name}</p>
      <img src={props.image} />
      <p className="presalePrice">{'$' + props.price}</p>
      <p className="salePrice">{'$' + price}</p>
      <button name={props.name} value={price} className="itemButton" onClick={props.addToCart}>Add to Order</button>
    </li>
    );
  }
  return (
    <li className="listItem">
      <p onClick={props.toggleModal}>{props.name}</p>
      <img src={props.image} />
      <p>{props.price ? '$' + props.price : ''}</p>
      <button name={props.name} value={props.price} className="itemButton" onClick={props.addToCart}>Add to Order</button>
    </li>
  );
};

export default ListItem;
