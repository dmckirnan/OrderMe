import React from 'react';

import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';

const Home = props => {
  return (
    <div>
      <h1 id='title'>OrderMe</h1>
      <button id='homeLogin'>Log In</button>
      <button id='homeCreate'>Sign Up</button>
      <div id='signupAdd'>Sign up for 10% Off All Items</div>
      <ProductList products={props.products} addToCart={props.addToCart} />
      <Cart submitOrder={props.submitOrder} cart={props.cart} />
      <footer />
    </div>
  );
};

export default Home;
