import React, { Component } from 'react';
import axios from 'axios';
import Styles from './../styles/App.scss';

import Login from './Login.jsx';
import Create from './Create.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      view: 'login',
      auth: false,
      attemptedLogin: false,
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
      ///
    }
  }

  createView() {
    let obj = Object.assign({}, this.state);
    let view = obj.view;
    view = 'create';
    this.setState({ view: view });
  }

  handleAuth(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    let auth = obj.auth;
    let view = obj.view;
    let attempted = obj.attemptedLogin;

    axios.post('/verifyUser', {
      username: e.target.username.value,
      password: e.target.password.value
    }).then(response => {
      if (response.data === true) {
        auth = true;
        view = 'menu';
        this.setState({ auth: auth, view: view });
      } else {
        view = 'login';
        attempted = true;
        this.setState({ view: view, attemptedLogin: attempted });
      }
    });
  }

  handleCreate(e) {
    e.preventDefault();

    const obj = Object.assign({}, this.state);
    let auth = obj.auth;
    let view = obj.view;

    axios.post('/createUser', {
      username: e.target.username.value,
      password: e.target.password.value
    }).then(response => {
      if (response.data === true) {
        auth = true;
        view = 'menu';
        this.setState({ auth: auth, view: view });
      } else {
        view = 'login';
        this.setState({ view: view });
        e.target.username.value = '';
        e.target.password.value = '';
      }
    });
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
          <Login auth={this.handleAuth} create={this.createView} attempted={this.state} />
        </div>
      )
    } else if (this.state.view === 'create') {
      return (
        <div id='createContainer'>
          <Create create={this.handleCreate} />
        </div>
      )
    } else if (this.state.view === 'menu' && this.state.auth === true) {
      return (
        <div id='appContainer'>
          <h1>Select Your Items</h1>
        </div>
      )
    } else if (this.state.view === 'cart' && this.state.auth === true) {
      <div id='cartContainer'>
        <h1>Order Summary: </h1>
      </div>
    }
  }
}

export default App;
