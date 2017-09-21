import React from 'react';
import Styles from './../styles/Modal.scss';

const Modal = props => {
  return (
  <div id="modal">
    <div id="modal-content">
      <div id="modal-header"></div>
      <div id="modal-body"></div>
    </div>
  </div>
  );
};

Modal.propTypes = {

};

export default Modal;
