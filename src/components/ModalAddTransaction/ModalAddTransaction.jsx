import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { ReactComponent as Close } from '../../icons/close.svg';
import { ButtonCloseStyled } from './ModalAddTransaction.styled';
import { ButtonAddStyled } from './ModalAddTransaction.styled';
import { ReactComponent as Plus } from '../../icons/plus.svg';

Modal.setAppElement('#root');

const defaultState = {
  date: new Date(),
  type: false,
  amount: '',
  comment: '',
  category: '',
};

export function ModalAddTransaction() {
  const [transaction, setTransaction] = useState(defaultState);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setTransaction(defaultState);
    setIsOpen(false);
  }
  return (
    <>
      <ButtonAddStyled type="button" onClick={openModal}>
        <Plus />
      </ButtonAddStyled>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        contentLabel="Example Modal"
        className="modal-container"
        htmlOpenClassName="no-scroll"
      >
        <ButtonCloseStyled type="button" onClick={closeModal}>
          <Close />
        </ButtonCloseStyled>
        <h2 className="modal-title">Add transaction</h2>
      </Modal>
    </>
  );
}
