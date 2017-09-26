import React, { Component } from 'react';
import axios from 'axios';

import './../styles/App.scss';
import { applyDiscount } from './../../utils/conversions';
import Login from './auth-page/Login.jsx';
import Create from './auth-page/Create.jsx';
import Checkout from './checkout-page/Checkout.jsx';
import Home from './home-page/main/Home.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsStore: [],
      products: [],
      search: '',
      view: 'home',
      modalActive: false,
      cart: {
        items: [],
        total: 0,
        orderNumber: '',
      },
      auth: {
        verified: false,
        redirect: false,
        username: '',
      },
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.orderInfo = this.orderInfo.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
    setTimeout(() => {
      this.fetchProducts();
    }, 3000);
  }

  fetchProducts() {
    const obj = Object.assign({}, this.state);
    let products = obj.products;
    let productsStore = obj.productsStore;

    axios.get('/getProducts')
      .then((data) => {
        products = data.data;
        productsStore = data.data;
        this.setState({ products, productsStore });
      });
  }

  handleAuth(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    const auth = Object.assign({}, this.state.auth);
    const cart = Object.assign({}, this.state.cart);

    let view = obj.view;
    const temp = e.target.username.value;

    axios.post('/verifyUser', {
      username: e.target.username.value,
      password: e.target.password.value,
    }).then((response) => {
      if (response.data === true) {
        auth.redirect = false;
        auth.verified = true;
        cart.total = cart.total !== 0 ? Number(applyDiscount(cart.total)) : cart.total;
        view = 'home';
        auth.username = temp;
        this.setState({ auth, view, cart });
      } else {
        view = 'login';
        auth.redirect = true;
        this.setState({ view, auth });
      }
    });
    e.target.username.value = '';
    e.target.password.value = '';
  }

  handleLogout() {
    const obj = Object.assign({}, this.state);
    const auth = Object.assign({}, this.state.auth);
    let view = obj.view;
    view = 'home';
    auth.verified = false;
    auth.username = '';
    this.setState({ auth, view });
  }

  toggleView(e) {
    const obj = Object.assign({}, this.state);
    let view = obj.view;

    if (e.target.id === 'createLink' || e.target.id === 'homeCreate') view = 'create';
    else if (e.target.id === 'homeLogin') view = 'login';
    else if (e.target.id === 'title') view = 'home';
    this.setState({ view });
  }

  handleCreate(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    const auth = Object.assign({}, this.state.auth);
    const cart = Object.assign({}, this.state.cart);

    let view = obj.view;
    const temp = e.target.username.value;

    axios.post('/createUser', {
      username: e.target.username.value,
      password: e.target.password.value,
    }).then((response) => {
      if (response.data === true) {
        auth.redirect = false;
        auth.verified = true;
        cart.total = cart.total !== 0 ? Number(applyDiscount(cart.total)) : cart.total;
        view = 'home';
        auth.username = temp;
        this.setState({ auth, view, cart });
      } else if (response.data === false) {
        view = 'login';
        auth.redirect = true;
        this.setState({ view, auth });
      } else {
        view = 'create';
        auth.redirect = true;
        this.setState({ view, auth });
      }
    });
    e.target.username.value = '';
    e.target.password.value = '';
  }

  handleSearch(e) {
    const obj = Object.assign({}, this.state);
    let products = obj.productsStore;
    let search = obj.search;
    search = e.target.search.value;

    products = products.filter((x) => {
      const lowerCase = x.name.toLowerCase();
      return lowerCase.indexOf(e.target.search.value) !== -1;
    });
    this.setState({ products, search });

    e.preventDefault();
  }

  sortProducts(e) {
    const obj = Object.assign({}, this.state);
    const products = obj.products;
    if (e.target.id === 'priceLH') products.sort((a, b) => a.price - b.price);
    if (e.target.id === 'priceHL') products.sort((a, b) => b.price - a.price);
    this.setState({ products });
  }

  addToCart(e) {
    const cart = Object.assign({}, this.state.cart);
    const item = {
      name: e.target.name,
      price: e.target.value,
    };
    cart.items.push(item);
    cart.total += Number(e.target.value);
    this.setState({ cart });
  }

  submitOrder() {
    const obj = Object.assign({}, this.state);
    const cart = Object.assign({}, this.state.cart);
    let view = obj.view;

    axios.post('/createOrder', {
      total: cart.total,
      items: cart.items,
      name: 'placeholder',
      phone: 1234,
    }).then((response) => {
      if (response.data) {
        view = 'checkout';
        cart.orderNumber = response.data.toString();
        this.setState({ view, cart });
      } else {
        /* eslint-disable no-console */
        console.log('Error with Order Submittal');
        /* eslint-enable no-console */
      }
    });
  }

  orderInfo(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    const cart = Object.assign({}, this.state.cart);
    let view = obj.view;
    axios.put('/updateOrder', {
      created: cart.orderNumber,
      name: e.target.name.value,
      phone: e.target.phone.value,
    }).then(() => {
      view = 'home';
      this.setState({ view });
    });
    e.target.name.value = '';
    e.target.phone.value = '';
  }

  removeFromCart(e) {
    const cart = Object.assign({}, this.state.cart);
    const num = Number(e.target.id);
    let value;
    cart.items = cart.items.filter((x, index) => {
      if (index === num) value = cart.items[index].price;
      return index !== num;
    });
    cart.total -= value;
    this.setState({ cart });
  }

  toggleModal(e) {
    const obj = Object.assign({}, this.state);
    let modalActive = obj.modalActive;
    let products = obj.products;
    const productsStore = obj.productsStore;

    if (modalActive) {
      products = productsStore;
      modalActive = false;
    } else {
      products = products.filter(x => x.name === e.target.alt);
      modalActive = true;
    }
    this.setState({ products, modalActive });
  }

  render() {
    if (this.state.view === 'login') {
      return (
        <div id="loginContainer">
          <Login
            handleAuth={this.handleAuth}
            toggleView={this.toggleView}
            redirect={this.state.auth.redirect}
          />
        </div>
      );
    } else if (this.state.view === 'create') {
      return (
        <div id="createContainer">
          <Create
            create={this.handleCreate}
            redirect={this.state.auth.redirect}
          />
        </div>
      );
    } else if (this.state.view === 'checkout') {
      return (
        <div id="checkoutContainer">
          <Checkout
            cart={this.state.cart}
            auth={this.state.auth}
            orderInfo={this.orderInfo}
            verified={this.state.auth.verified}
            removeFromCart={this.removeFromCart}
          />
        </div>
      );
    }
    return (
      <div>
        <Home
          products={this.state.products}
          auth={this.state.auth}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          submitOrder={this.submitOrder}
          cart={this.state.cart}
          toggleView={this.toggleView}
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
          sortProducts={this.sortProducts}
          toggleModal={this.toggleModal}
          modalActive={this.state.modalActive}
        />
      </div>
    );
  }
}

export default App;
