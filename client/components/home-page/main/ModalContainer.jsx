import React, { PropTypes } from 'react';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import Modal from 'react-modal';
import images from './../../../../data/images';
import './../../../styles/Modal.scss';
import { applyDiscount, getDiscount } from './../../../../utils/conversions';

const ModalContainer = (props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '750px',
      height: '750px',
      transform: 'translate(-50%, -50%)',
    },
  };

  if (props.modalActive === true) {
    const image = images[props.products[0].name];
    if (props.verified) {
      const price = Number(applyDiscount(props.products[0].price));
      const discount = Number(getDiscount(props.products[0].price)).toFixed(2);
      return (
        <div>
          <Modal
            isOpen={props.modalActive}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button id="modal-button" onClick={props.toggleModal}>x</button>
            <h2 id="modal-title">{props.products[0].name}</h2>
            <img id="modal-image" src={image} alt="test" />
            <p id="modal-description">{props.products[0].description}</p>
            <p id="modal-presale">{`$ ${props.products[0].price}`}</p>
            <p id="modal-discount">{`- ${discount}`}</p>
            <p id="modal-final">{`$ ${price}`}</p>
            <button name={props.products[0].name} value={props.products[0].price} className="itemButton" id="itemButton" onClick={props.addToCart}><span><FaShoppingCart /></span>Add to Order</button>
          </Modal>
        </div>
      );
    }
    return (
      <div>
        <Modal
          isOpen={props.modalActive}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button id="modal-button" onClick={props.toggleModal}>x</button>
          <h2 id="modal-title">{props.products[0].name}</h2>
          <img id="modal-image" src={image} alt="test" />
          <p id="modal-description">{props.products[0].description}</p>
          <p id="modal-price">{`$ ${props.products[0].price}`}</p>
          <button name={props.products[0].name} value={props.products[0].price} className="itemButton" id="itemButton" onClick={props.addToCart}><span><FaShoppingCart /></span>Add to Order</button>
        </Modal>
      </div>
    );
  }
  return null;
};

ModalContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalActive: PropTypes.bool.isRequired,
  verified: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ModalContainer;
