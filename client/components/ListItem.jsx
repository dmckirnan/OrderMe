import React from 'react';
import Styles from '../styles/ListItem.scss';

const ListItem = props => {
  return (
    <li className='listItem'>
      <p>{props.name}</p>
      <img src={props.image} />
      <button className='itemButton' onClick={props.addToCart}>Add to Order</button>
      <p>{props.price}</p>
    </li>
  );
};

export default ListItem;
