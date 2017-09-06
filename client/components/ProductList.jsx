import React, { Component } from "react";
import ListItem from "./ListItem.jsx";
import Cart from "./Cart.jsx";

const ProductList = props => {
  const products = props.products;
  const productsArr = [];

  if (!products || products.length === 0) productsArr.push(<ProductItem key={0}/>)
  else {
    for (let i = 0; i < products.length; i += 1) {
      productsArr.push(<ProductItem addToCart={props.addToCart} itemNum={i + 1} key={i} sku={products[i].sku} image={products[i].image.contentType} name={products[i].name} price={product[i].price} quantity={products[i].quantity} />)
    }
  }

  return (
    <ul id='productList'>
      {productsArr}
    </ul>
  );
};

export default ProductList;
