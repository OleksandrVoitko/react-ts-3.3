import React, { Component } from 'react';
import { DivModal, DivOverlay } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      console.log('Escape');
      this.props.onClose();
    }
  };

  handleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <DivOverlay onClick={this.handleClickBackdrop}>
        <DivModal>
          <img src={this.props.largeImg} />
        </DivModal>
      </DivOverlay>,
      modalRoot
    );
  }
}
