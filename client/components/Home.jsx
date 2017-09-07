import React from 'react';
import Styles from '../styles/Home.scss';

import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';

const Home = (props) => {
  return (
    <div id="homeContainer">
      <header id="homeHeader">
        <button id="homeLogin">Log In</button>
        <button id="homeCreate">Sign Up</button>
        <h1 id="title">OrderMe</h1>
      </header>
      <div id="ad">Sign-Up / Log-In for 10% Off All Items</div>
      <div id="contentContainer">
        <ProductList products={props.products} addToCart={props.addToCart} />
        <Cart submitOrder={props.submitOrder} cart={props.cart} />
      </div>
      <footer />
    </div>
  );
};

export default Home;
