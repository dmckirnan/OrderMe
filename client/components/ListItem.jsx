import React from 'react';
import Styles from '../styles/ListItem.scss';

const ListItem = props => {
  return (
    <li className='listItem'>
      <p>{props.name}</p>
      <img src={props.image} />
      <p>{props.price}</p>
      <button className='itemButton' onClick={props.addToCart}>Add to Order</button>
    </li>
  );
};

export default ListItem;
