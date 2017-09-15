import React from 'react';

const Modal = props => {
  if (props.view === 'modal') {
    <div id="modal">
      <div id="modal-content">
        <div id="modal-header"></div>
        <div id="modal-body"></div>
      </div>
    </div>
  } else return null;
};

export default Modal;
