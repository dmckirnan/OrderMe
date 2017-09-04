import React from 'react';
import { render } from 'enzyme';

import App from './../client/components/App.jsx';
import Login from './../client/components/Login.jsx'

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
});


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