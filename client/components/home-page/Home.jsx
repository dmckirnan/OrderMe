import React, { PropTypes } from 'react';
import Styles from '/../../styles/Home.scss';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import Modal from './Modal.jsx';

import FaSearch from 'react-icons/lib/fa/search';

const Home = (props) => {
  let verified = props.auth === undefined ? false : props.auth.verified;
  if (verified === true) {
    return (
      <div id="homeContainer">
        <header id="homeHeader">
          <button id="logoutButton" onClick={props.handleLogout}>Log Out</button>
          <p id="welcomeTag">Welcome Back {props.auth.username}</p>
          <h1 id="title">OrderMe</h1>
        </header>
        <div id="log-ad">OrderMe Prime is Saving You 10%!</div>
        <form id="searchForm" onSubmit={props.handleSearch}>
          <input id="search" name="search" placeholder="search"></input>
          <button id="searchButton" type="submit"><FaSearch /></button>
        </form>
        <div id="contentContainer">
          <ProductList sortProducts={props.sortProducts} products={props.products} addToCart={props.addToCart} auth={props.auth} />
          <Cart submitOrder={props.submitOrder} deleteOrder={props.removeOrder} cart={props.cart} auth={props.auth} />
        </div>
        <footer />
      </div>
    );
  }
  return (
    <div id="homeContainer">
      <header id="homeHeader">
        <button id="homeLogin" onClick={props.toggleView}>Log In</button>
        <button id="homeCreate" onClick={props.toggleView}>Sign Up</button>
        <h1 id="title">OrderMe</h1>
      </header>
      <div id="ad">Sign-In for 10% Off All Items</div>
      <form id="searchForm" onSubmit={props.handleSearch}>
        <input id="search" name="search" placeholder="search"></input>
        <button id="searchButton" type="submit"><FaSearch /></button>
      </form>
      <div id="contentContainer">
        <ProductList sortProducts={props.sortProducts} products={props.products} addToCart={props.addToCart} auth={props.auth} toggleModal={props.toggleModal} />
        <Cart submitOrder={props.submitOrder} deleteOrder={props.removeOrder} cart={props.cart} auth={props.auth} />
      </div>
      <footer />
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired,
  toggleView: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  sortProducts: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Home;
