import React, { Component } from 'react';
import Styles from '../styles/ProductList.scss';
import ItemStyles from '../styles/ListItem.scss';
import images from './../../data/images.js';

import ListItem from './ListItem.jsx';

const ProductList = (props) => {
  const products = props.products;
  const productsArr = [];

  if (!products || products.length === 0) productsArr.push(<ListItem key={0} />);
  else {
    for (let i = 0; i < products.length; i += 1) {
      productsArr.push(<ListItem addToCart={props.addToCart} verified={props.auth.verified} itemNum={i + 1} key={i} sku={products[i].sku} image={images[i]} name={products[i].name} price={products[i].price} quantity={products[i].quantity} />)
    }
  }

  return (
    <ul id="productList">
      {productsArr}
    </ul>
  );
};

export default ProductList;
