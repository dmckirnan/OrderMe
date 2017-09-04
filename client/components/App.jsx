import React, { Component } from 'react';
import Styles from './../styles/styles.scss';

import Login from './Login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      view: 'login',
    }
    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {

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
    } else {
      return (
      <div id='appContainer'>
        <h1>OrderMe</h1>
      </div>
      )
    }
  }
}

export default App;
