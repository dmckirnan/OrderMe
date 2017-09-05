import React, { Component } from 'react';
import axios from 'axios';
import Styles from './../styles/App.scss';

import Login from './Login.jsx';
import Create from './Create.jsx';
import Menu from './Menu.jsx';
import Cart from './Cart.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      view: 'login',
      auth: false,
      redirect: false,
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.createView = this.createView.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }

  componentDidMount() {
    if (this.state.view === 'cart') {
      this.fetchOrder();
    }
  }

  handleAuth(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    let auth = obj.auth;
    let view = obj.view;
    let redirect = obj.redirect;

    axios.post('/verifyUser', {
      username: e.target.username.value,
      password: e.target.password.value
    }).then(response => {
      if (response.data === true) {
        redirect = false;
        auth = true;
        view = 'menu';
        this.setState({ auth: auth, view: view, redirect: redirect });
      } else {
        view = 'login';
        redirect = true;
        this.setState({ view: view, redirect: redirect });
      }
    });
    e.target.username.value = '';
    e.target.password.value = '';
  }

  createView() {
    let obj = Object.assign({}, this.state);
    let view = obj.view;
    view = 'create';

    this.setState({ view: view });
  }

  handleCreate(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    let auth = obj.auth;
    let view = obj.view;
    let redirect = obj.redirect;

    axios.post('/createUser', {
      username: e.target.username.value,
      password: e.target.password.value
    }).then(response => {
      if (response.data === true) {
        redirect = false;
        auth = true;
        view = 'menu';
        this.setState({ auth: auth, view: view, redirect: redirect });
      } else {
        view = 'create';
        redirect = true;
        this.setState({ view: view, redirect: redirect });
      }
    });
    e.target.username.value = '';
    e.target.password.value = '';
  }

  fetchOrder(e) {

  }

  addOrder() {

  }

  updateOrder() {

  }

  removeOrder() {

  }

  render() {
    if (this.state.view === 'login') {
      return (
        <div id='loginContainer'>
          <Login auth={this.handleAuth} create={this.createView} redirect={this.state.redirect} />
        </div>
      )
    } else if (this.state.view === 'create') {
      return (
        <div id='createContainer'>
          <Create create={this.handleCreate} redirect={this.state.redirect} />
        </div>
      )
    } else if (this.state.view === 'menu' && this.state.auth === true) {
      return (
        <div id='menuContainer'>
          <h1>Select Your Items</h1>
          <Menu />
        </div>
      )
    } else if (this.state.view === 'cart' && this.state.auth === true) {
      <div id='cartContainer'>
        <h1>Order Summary: </h1>
        <Cart />
      </div>
    }
  }
}

export default App;
