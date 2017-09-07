import React from 'react';
import Styles from '../styles/ListItem.scss';

const ListItem = (props) => {
  if (props.verified === true) {
    return (
    <li className="listItem">
      <p>{props.name}</p>
      <img src={props.image} />
      <p className="presalePrice">{'$' + props.price}</p>
      <p className="salePrice">{'$' + Math.floor(props.price - (props.price * 10) / 100)}</p>
      <button className="itemButton" onClick={props.addToCart}>Add to Order</button>
    </li>
    );
  }
  return (
    <li className="listItem">
      <p>{props.name}</p>
      <img src={props.image} />
      <p>{props.price ? '$' + props.price : ''}</p>
      <button className="itemButton" onClick={props.addToCart}>Add to Order</button>
    </li>
  );
};

export default ListItem;
