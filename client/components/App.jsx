import React, { Component } from 'react';
import axios from 'axios';
import Styles from './../styles/App.scss';

import Login from './Login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      view: 'login',
    }
    this.authenticate = this.authenticate.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }

  componentDidMount() {
    if (this.state.view === 'cart') {
      ///
    }
  }

  authenticate() {

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
          <Login authenticate={this.authenticate}/>
        </div>
      )
    } else if (this.state.view === 'menu') {
      return (
      <div id='appContainer'>
        <h1>Select Your Items</h1>
      </div>
      )
    } else if (this.state.view === 'cart') {
      <div id='cartContainer'>
        <h1>Order Summary: </h1>
      </div>
    }
  }
}

export default App;
