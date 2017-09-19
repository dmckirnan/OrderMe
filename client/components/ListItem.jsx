import React from 'react';
import Styles from '../styles/Home.scss';
import { applyDiscount } from './../../utils/conversions.js';

const ListItem = (props) => {
  if (props.verified === true) {
    let price = Number(applyDiscount(props.price));
    return (
    <li className="listItem">
      <div className="item-left">
        <img src={props.image} />
      </div>
      <div className="item-center">
        <h2>{props.name}</h2>
        <p>This is test description, purposefully long so you have to style it you lazy ass.</p>
      </div>
      <div className="item-right">
        <p className="presalePrice">{'$' + props.price}</p>
        <p className="salePrice">{'$' + price}</p>
        <button name={props.name} value={price} className="itemButton" onClick={props.addToCart}>Add to Order</button>
      </div>
    </li>
    );
  }
  return (
    <li className="listItem">
      <div className="item-left">
        <img src={props.image} />
      </div>
      <div className="item-center">
        <h2>{props.name}</h2>
        <p>This is test description, purposefully long so you have to style it you lazy ass.</p>
      </div>
      <div className="item-right">
        <p>{props.price ? '$' + props.price : ''}</p>
        <button name={props.name} value={props.price} className="itemButton" onClick={props.addToCart}>Add to Order</button>
      </div>
    </li>
  );
};

export default ListItem;
