import React from 'react';

const ListItem = props => {
  return (
    <li className='listItem'>
      <img src={props.image} />
      <button className='itemButton' onClick={props.addToCart}>Add to Order</button>
      <p>{props.price}</p>
    </li>
  );
};

export default ListItem;
