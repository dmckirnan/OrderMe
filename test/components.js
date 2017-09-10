import React from 'react';
import { render } from 'enzyme';

import App from './../client/components/App.jsx';
import Login from './../client/components/Login.jsx';
import Create from './../client/components/Create.jsx';
import Home from './../client/components/Home.jsx';
import ProductList from './../client/components/ProductList.jsx';
import ListItem from './../client/components/ListItem.jsx';
import Cart from './../client/components/Cart.jsx';
import CartItem from './../client/components/CartItem.jsx';
import Dropdown from './../client/components/Dropdown.jsx';
import Checkout from './../client/components/Checkout.jsx';

describe('<App />', () => {
  it('renders appropriate default state values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().productsStore).to.deep.equal([]);
    expect(wrapper.state().products).to.deep.equal([]);
    expect(wrapper.state().search).to.equal('');
    expect(wrapper.state().view).to.equal('home');
    expect(wrapper.state().cart).to.deep.equal({items: [], total: 0});
    expect(wrapper.state().auth).to.deep.equal({verified: false, redirect: false, username: ''});
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
  it('handleAuth method', () => {
    const handleAuth = spy();
    spy(App.prototype, 'handleAuth');
    const wrapper = shallow(<App />);
    wrapper.setState({ view: 'login' });
    wrapper.find('button').simulate('click');
    expect(App.prototype.handleAuth).toHaveBeenCalled();
  });
  it('handleLogout method', () => {
    it('Changes view, resets verified, and resets username properties in state when clicked', () => {
      spy(App.prototype, 'handleLogout');
      const wrapper = mount(<App />);
      wrapper.find('#logoutButton').simulate('click');
      expect(App.prototype.handleLogout.calledOnce).to.equal(true);
      expect(wrapper.state().view).to.equal('home');
      expect(wrapper.state().auth.verified).to.equal(false);
      expect(wrapper.state().auth.username).to.equal('');
    });
  });
  it('toggleView method', () => {
    it('toggleView method should change view to create when accessed from createLink click', () => {
      spy(App.prototype, 'toggleView');
      const wrapper = mount(<App />);
      wrapper.find('#createLink').simulate('click');
      expect(App.prototype.toggleView.calledOnce).to.equal(true);
      expect(wrapper.state().view).to.equal('create');
    });
  })
  it('handleCreate method', () => {
    spy(App.prototype, 'handleCreate');
    const wrapper = mount(<App />);
    wrapper.setState({ view: 'create' });
    wrapper.find('#createButton').simulate('click');
    expect(App.prototype.handleCreate.calledOnce).to.equal(true);
  });
  it('handleSearch method', () => {
    it('Alters current products array', () => {
      spy(App.prototype, 'handleSearch');
      const wrapper = mount(<App />);
      wrapper.setState({ products: [{name: 'shoes', price: 19.99}, {name: 'socks', price: 12.99}], search: 'socks'});
      wrapper.find('#searchButton').simulate('click');
      expect(App.prototype.handleSearch.calledOnce).to.equal(true);
      expect(wrapper.state().products).to.deep.equal([{name: 'socks', price: 12.99}]);
    });
  });
  it('sortProducts', () => {
    //
  });
  it('addToCart', () => {
    //
  });
  it('submitOrder', () => {
    //
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

describe('<Create />', () => {
  it('should be a form element', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.type()).to.eql('form');
  });
  it('renders two <input>, a <button>, a <h2>, and a <h3>', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('input')).to.have.length(2);
    expect(wrapper.find('#createButton')).to.have.length(1);
    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('h3')).to.have.length(1);
  })
});

describe('<Home />', () => {
  it('should be a div element', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.type()).to.eql('div');
  });
  it('renders 3 <button>, 1 <form>, 1 <input>, 2 <div>', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('button')).to.have.length(3);
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(3);
  });
  it('renders a <p> when auth.verified === true', () => {
    const wrapper = shallow(<Home />);
    let auth = { verified: true, redirect: false, username: 'dave'};
    wrapper.setProps({ auth });
    expect(wrapper.find('#logoutButton')).to.have.length(1);
  });
  it('does not render #homeLogin or #homeCreate buttons when auth.verified === true', () => {
    const wrapper = shallow(<App />);
    let auth = { verified: true, redirect: false, username: 'dave'};
    wrapper.setState({ auth });
    expect(wrapper.find('#homeLogin')).to.have.length(0);
    expect(wrapper.find('#homeCreate')).to.have.length(0);
  });
  it('should render a <ProductList /> & <Cart /> component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(ProductList)).to.have.length(1);
    expect(wrapper.find(Cart)).to.have.length(1);
  })
});

describe('<ProductList />', () => {
  it('should be a <ul> element', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.type()).to.eql('ul');
  });
  it('should render one <ListItem /> component when this.state.products is empty', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.find(ListItem)).to.have.length(1);
  });
  it('should render as many <ListItem /> components as this.state.products.length', () => {
    const productListWrapper = shallow(<ProductList />);
    let products = [{name: 'dog', price: 1}, {name: 'cat', price: 1}, {name: 'mouse', price: 1}];
    let auth = { verified: false, redirect: false, username: ''};
    productListWrapper.setProps({ products, auth });
    expect(productListWrapper.find(ListItem)).to.have.length(3);
  });
  it('should render a <Dropdown /> component', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.find(Dropdown)).to.have.length(1);
  });
});

describe('<ListItem />', () => {
  it('should be a <li> element', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper.type()).to.eql('li');
  });
});

describe('<Cart />', () => {
  it('should be a <table> element', () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper.type()).to.eql('table');
  });
  it('should render one <CartItem /> component when this.state.cart.items is empty', () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper.find(CartItem)).to.have.length(1);
  });
  it('should render as many <CartItem /> components as this.state.cart.items.length', () => {
    const cartWrapper = shallow(<Cart />);
    let cart = { items: [{name: 'toys', price: 1}, {name: 'dogs', price: 2}], total: 0 };
    let auth = { verified: false, redirect: false, auth: ''};
    cartWrapper.setProps({ cart, auth });
    expect(cartWrapper.find(CartItem)).to.have.length(2);
  });
});

describe('<CartItem />', () => {
  it('should be a <tr> element', () => {
    const wrapper = shallow(<CartItem />);
    expect(wrapper.type()).to.eql('tr');
  });
  it('should render two <td> elements', () => {
    const wrapper = shallow(<CartItem />);
    expect(wrapper.find('td')).to.have.length(2);
  });
});

describe('<Dropdown />', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.type()).to.eql('div');
  });
});

describe('<Checkout />', () => {
  //
});