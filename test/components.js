import React from 'react';
import { render } from 'enzyme';

import App from './../client/components/App.jsx';
import Login from './../client/components/Login.jsx';
import Create from './../client/components/Create.jsx';
import Home from './../client/components/Home.jsx';
import Checkout from './../client/components/Checkout.jsx';
import Cart from './../client/components/Cart.jsx';

describe('<App />', () => {
  it('renders appropriate default state values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().view).to.equal('home');
    expect(wrapper.state().products).to.deep.equal([]);
    expect(wrapper.state().auth).to.equal(false);
    expect(wrapper.state().redirect).to.equal(false);
  });
  it('renders a <Login /> component if view is equal to login', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ view: 'login' });
    expect(wrapper.find(Login)).to.have.length(1);
  });
  it('renders a <Create /> component if view is equal to create', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ view: 'create' });
    expect(wrapper.find(Create)).to.have.length(1);
  });
  it('renders a <Home /> component if view is equal to home', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ view: 'home' });
    expect(wrapper.find(Home)).to.have.length(1);
  });
  it('renders a <Checkout /> component if view is equal to checkout', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ view: 'checkout' });
    expect(wrapper.find(Checkout)).to.have.length(1);
  });
});


describe('<App /> methods', () => {
  it('handleCreate method', () => {

  });
  it('handleAuth method', () => {
    
  });
  it('toggleView method should change view to create when accessed from createLink click', () => {
    spy(App.prototype, 'toggleView');
    const wrapper = mount(<App />);
    wrapper.find('#createLink').simulate('click');
    expect(App.prototype.toggleView.calledOnce).to.equal(true);
    expect(wrapper.state().view).to.equal('create');
  });
})


describe('<Login />', () => {
  it('should be a form element', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.type()).to.eql('form');
  });
  it('renders two inputs & one button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.length(2);
    expect(wrapper.find('#loginButton')).to.have.length(1);
  });
});