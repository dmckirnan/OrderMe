import React, { Component } from 'react';
import axios from 'axios';
import Styles from './../styles/App.scss';

import Login from './Login.jsx';
import Create from './Create.jsx';
import Home from './Home.jsx';
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
      view: 'home',
      auth: false,
      redirect: false,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
    if (this.state.products.length === 0) this.fetchProducts();
  }

  fetchProducts() {
    const obj = Object.assign({}, this.state);
    let products = obj.products;

    axios.get('/getProducts')
      .then((data) => {
        products = data.data;
        this.setState({ products });
      });
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
        view = 'home';
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

  toggleView(e) {
    const obj = Object.assign({}, this.state);
    let view = obj.view;

    if (e.target.id === 'createLink') view = 'create';
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
        view = 'home';
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

  addToCart(item, val) {
    const obj = Object.assign({}, this.state);
    let cart = obj.cart;

    cart.items.push(item);
    cart.total += val;

    this.setState({ cart });
  }

  submitOrder() {
    const obj = Object.assign({}, this.state);
    let view = obj.view;

    axios.post('/createOrder', {
      total: this.state.cart.total,
      items: this.state.cart.items,
      name: 'placeholder',
      phone: 1234,
    }).then((response) => {
      if (response.data === true) {
        view = 'checkout';
        this.setState({ view });
      } else console.log('Error with Order Submittal');
    });
  }

  orderInfo(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    let view = obj.view;

    axios.put('/updateOrder', {
      name: e.target.name.value,
      phone: e.target.phone.value,
    }).then((response) => {
      view = 'home';
      this.setState({ view });
    })
    e.target.name.value = '';
    e.target.phone.value = '';
  }

  removeOrder() {
    const obj = Object.assign({}, this.state);
    let cart = obj.cart;
    cart.items = [];
    cart.total = 0;

    this.setState({ cart });
  }

  render() {
    if (this.state.view === 'login') {
      return (
        <div id="loginContainer">
          <Login auth={this.handleAuth} toggleView={this.toggleView} redirect={this.state.redirect} />
        </div>
      );
    } else if (this.state.view === 'create') {
      return (
        <div id="createContainer">
          <Create create={this.handleCreate} redirect={this.state.redirect} />
        </div>
      );
    } else if (this.state.view === 'checkout') {
      return (
        <div id="checkoutContainer">
          <Checkout cart={this.state.cart} />
        </div>
      );
    }
    return (
      <div>
        <Home products={this.state.products} auth={this.state.auth} addToCart={this.addToCart} removeOrder={this.removeOrder} submitOrder={this.submitOrder} cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
