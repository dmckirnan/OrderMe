import React, { PropTypes } from 'react';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

import './../../../styles/ProductList.scss';
import { applyDiscount, getDiscount } from './../../../../utils/conversions';

const ListItem = (props) => {
  if (props.verified === true) {
    const price = Number(applyDiscount(props.price));
    const discount = Number(getDiscount(props.price)).toFixed(2);
    return (
      <li className="listItem">
        <div className="item-left" name={props.name} onClick={props.toggleModal}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className="item-center">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
        <div className="item-right">
          <p className="presalePrice">{`$ ${props.price}`}</p>
          <p className="discountValue">{`- ${discount}`}</p>
          <p className="salePrice">{`$ ${price}`}</p>
          <button name={props.name} value={price} className="itemButton" onClick={props.addToCart}><FaShoppingCart />Add to Order</button>
        </div>
      </li>
    );
  }
  return (
    <li className="listItem">
      <div className="item-left" onClick={props.toggleModal}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="item-center">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className="item-right">
        <p>{props.price ? `$ ${props.price}` : ''}</p>
        <button name={props.name} value={props.price} className="itemButton" onClick={props.addToCart}><span><FaShoppingCart /></span>Add to Order</button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  verified: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ListItem;
