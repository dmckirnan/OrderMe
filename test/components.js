import React from 'react';
import { render } from 'enzyme';

import App from './../client/components/App.jsx';
import Login from './../client/components/Login.jsx';
import Create from './../client/components/Create.jsx';
import Cart from './../client/components/Cart.jsx';
import Menu from './../client/components/Menu.jsx';

describe('<App />', () => {
  it('renders appropriate default state values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().view).to.equal('login');
    expect(wrapper.state().orders).to.deep.equal([]);
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
  it('renders a <Menu /> component if view is equal to menu & auth is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ view: 'menu', auth: true });
    expect(wrapper.find(Menu)).to.have.length(1);
  });
  it('renders a <Cart /> component if view is equal to cart & auth is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ view: 'cart', auth: true });
    expect(wrapper.find(Cart)).to.have.length(1);
  });
});


describe('<App /> methods', () => {
  it('handleCreate method', () => {

  });
  it('handleAuth method', () => {
    spy(App.prototype, 'handleAuth');
  });
  it('createView method', () => {
    const wrapper = shallow(<App />);
    spy(App.prototype, 'createView');
    wrapper.find('#createLink').simulate('click');
    expect(App.prototype.createView).toHaveBeenCalled();
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