import React, { Component } from 'react';
import axios from 'axios';
import Styles from './../styles/App.scss';

import Login from './Login.jsx';
import Create from './Create.jsx';
import Home from './Home.jsx';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {
        items: [],
        total: 0,
      },
      products: [],
      view: 'login',
      auth: false,
      redirect: false,
    };
    
    this.handleAuth = this.handleAuth.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.createView = this.createView.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  handleAuth(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    let auth = obj.auth;
    let view = obj.view;
    let redirect = obj.redirect;

    axios.post('/verifyUser', {
      username: e.target.username.value,
      password: e.target.password.value,
    }).then((response) => {
      if (response.data === true) {
        redirect = false;
        auth = true;
        view = 'menu';
        this.setState({ auth, view, redirect });
      } else {
        view = 'login';
        redirect = true;
        this.setState({ view, redirect });
      }
    });
    e.target.username.value = '';
    e.target.password.value = '';
  }

  createView() {
    const obj = Object.assign({}, this.state);
    let view = obj.view;
    view = 'create';

    this.setState({ view });
  }

  handleCreate(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    let auth = obj.auth;
    let view = obj.view;
    let redirect = obj.redirect;

    axios.post('/createUser', {
      username: e.target.username.value,
      password: e.target.password.value,
    }).then((response) => {
      if (response.data === true) {
        redirect = false;
        auth = true;
        view = 'menu';
        this.setState({ auth, view, redirect });
      } else {
        view = 'create';
        redirect = true;
        this.setState({ view, redirect });
      }
    });
    e.target.username.value = '';
    e.target.password.value = '';
  }

  fetchProducts(e) {

  }

  addOrder() {
    
  }

  updateOrder() {

  }

  removeOrder() {

  }

  toggleView() {
    // one stop shop method to update view from any button
  }

  render() {
    if (this.state.view === 'login') {
      return (
        <div id="loginContainer">
          <Login auth={this.handleAuth} create={this.createView} redirect={this.state.redirect} />
        </div>
      );
    } else if (this.state.view === 'create') {
      return (
        <div id="createContainer">
          <Create create={this.handleCreate} redirect={this.state.redirect} />
        </div>
      );
    } else if (this.state.view === 'menu') {
      return (
        <div id="menuContainer">
          <ProductList auth={this.state.auth} />
        </div>
      );
    } else if (this.state.view === 'cart') {
      return (
        <div id="cartContainer">
          <Cart />
        </div>
      );
    }
  }
}

export default App;
