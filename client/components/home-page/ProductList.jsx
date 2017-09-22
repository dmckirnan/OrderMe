import React, { PropTypes } from 'react';
import './../../styles/Home.scss';
import images from './../../../data/images';
import ListItem from './ListItem.jsx';
import Dropdown from './Dropdown.jsx';

const ProductList = (props) => {
  const products = props.products;
  const productsArr = [];

  if (!products || products.length === 0) productsArr.push(<ListItem key={0} />);
  else {
    for (let i = 0; i < products.length; i += 1) {
      productsArr.push(
        <ListItem
          toggleModal={props.toggleModal}
          addToCart={props.addToCart}
          verified={props.auth.verified}
          itemNum={i + 1}
          key={i}
          sku={products[i].sku}
          image={images[products[i].name]}
          name={products[i].name}
          price={products[i].price}
          quantity={products[i].quantity}
        />,
      );
    }
  }

  return (
    <ul id="productList">
      <Dropdown sortProducts={props.sortProducts} />
      {productsArr}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  sortProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ProductList;
