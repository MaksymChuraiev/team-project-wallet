import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { ReactComponent as Close } from '../../icons/close.svg';
import { ButtonCloseStyled } from './ModalAddTransaction.styled';
import { ButtonAddStyled, TransactionType, ModalTitle, Toggle } from './ModalAddTransaction.styled';
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
  const handleInputChange = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    updateTransaction(name, value)
    if (event.target.type === 'checkbox') {
      updateTransaction('category', '')
    }
  }

  const updateTransaction = (name, value) => {
    setTransaction((prev) => ({ ...prev, [name]: value }))
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
        <ModalTitle>Add transaction</ModalTitle>
        <TransactionType>
          <p
            className={`checkbox ${
              !transaction.type ? 'active-green' : ''
            }`}
          >
            Income
          </p>
          <Toggle>
            <input
              type="checkbox"
              name="type"
              onChange={handleInputChange}
              checked={transaction.type}
            />
            <div className="thumb">
              <div className="indicator">
                <Plus />
              </div>
            </div>
          </Toggle>
          <p
            className={`checkbox ${
              transaction.type ? 'active-red' : ''
            }`}
          >
            Expense
          </p>
        </TransactionType>
      </Modal>
    </>
  );
}
