import React from 'react';
import Styles from '../styles/Home.scss';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';

const Home = (props) => {
  if (props.auth.verified === true) {
    return (
      <div id="homeContainer">
        <header id="homeHeader">
          <button id="logoutButton" onClick={props.handleLogout}>Log Out</button>
          <p id="welcomeTag">Welcome Back {props.auth.username}</p>
          <h1 id="title">OrderMe</h1>
        </header>
        <div id="ad">OrderMe Prime is Saving You 10%!</div>
        <form id="searchForm" onSubmit={props.handleSearch}>
          <input id="search" name="search" placeholder="search"></input>
          <button id="searchButton" type="submit">Submit</button>
        </form>
        <div id="contentContainer">
          <ProductList products={props.products} addToCart={props.addToCart} auth={props.auth} />
          <Cart submitOrder={props.submitOrder} cart={props.cart} auth={props.auth} />
        </div>
        <footer />
      </div>
    );
  }
  return (
    <div id="homeContainer">
      <header id="homeHeader">
        <button id="homeLogin" onClick={props.toggleView} >Log In</button>
        <button id="homeCreate" onClick={props.toggleView} >Sign Up</button>
        <h1 id="title">OrderMe</h1>
      </header>
      <div id="ad">Sign-Up / Log-In for 10% Off All Items</div>
      <form id="searchForm" onSubmit={props.handleSearch}>
        <input id="search" name="search" placeholder="search"></input>
        <button id="searchButton" type="submit">Submit</button>
      </form>
      <div id="contentContainer">
        <ProductList products={props.products} addToCart={props.addToCart} auth={props.auth} />
        <Cart submitOrder={props.submitOrder} cart={props.cart} auth={props.auth} />
      </div>
      <footer />
    </div>
  );
};

export default Home;
