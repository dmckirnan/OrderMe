import React, { PropTypes } from 'react';
import Styles from './../../styles/Home.scss';

import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import SearchForm from './SearchForm.jsx';
import Header from './Header.jsx';
import Ad from './Ad.jsx';
import Modal from './Modal.jsx';

const Home = (props) => {
  let verified = props.auth === undefined ? false : props.auth.verified;
  if (verified === true) {
    return (
      <div id="homeContainer">
        <Header toggleView={props.toggleView} auth={props.auth} handleLogout={props.handleLogout} />
        <Ad auth={props.auth} />
        <SearchForm handleSearch={props.handleSearch} />
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
      <Header toggleView={props.toggleView} auth={props.auth} toggleView={props.toggleView} />
      <Ad auth={props.auth} />
      <SearchForm handleSearch={props.handleSearch} />
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
