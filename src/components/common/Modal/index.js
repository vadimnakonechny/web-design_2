import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

/* eslint-disable */
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);

    const node = document.createElement('div');
    node.className = 'modal-portal';
    this.node = node;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    modalRoot.appendChild(this.node);
    document.body.classList.add('modal-open');
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.node);
    document.body.classList.remove('modal-open');
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    e.stopPropagation();
    if (!this.node || !this.node.contains(e.target)) {
      this.props.close();
    }
  }

  render() {
    return ReactDOM.createPortal(
      <ModalWindow className="modal-dialog">{this.props.children}</ModalWindow>,
      this.node,
    );
  }
}


export default Modal;

const ModalWindow = styled.div`
  z-index: 100000000000;
`