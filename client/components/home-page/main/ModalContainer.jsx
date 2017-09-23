import React, { PropTypes } from 'react';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import Modal from 'react-modal';
import images from './../../../../data/images';

const ModalContainer = (props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  if (props.modalActive === true) {
    const image = images[props.products[0].name];
    return (
      <div>
        <Modal
          isOpen={props.modalActive}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button id="modal-button" onClick={props.toggleModal}>x</button>
          <h2 id="modal-title">{props.products[0].name}</h2>
          <p id="modal-price">{props.products[0].price}</p>
          <img id="modal-image" src={image} alt="test" />
          <p id="modal-description"> test description </p>
          <button name={props.products[0].name} value={props.products[0].price} className="itemButton" onClick={props.addToCart}><span><FaShoppingCart /></span>Add to Order</button>
        </Modal>
      </div>
    );
  }
  return null;
};

ModalContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalActive: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ModalContainer;
