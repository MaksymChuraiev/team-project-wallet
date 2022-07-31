import React from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';

import { ModalForm } from './Form/Form';
import { TransactionTypeToggle } from './TransactionType/TransactionType';

import { ReactComponent as Close } from '../../icons/close.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

import {
  ButtonAddStyled,
  ButtonCloseStyled,
  ModalTitle,
} from './ModalAddTransaction.styled';
import { Button } from './Form/Form.styled';

Modal.setAppElement('#root');

const ModalStyled = styled(Modal)`
  position: relative;
  width: 300px;
  padding: 20px;
  background-color: var(--color-white);
  border: none;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 540px;
    padding: 40px 73px;
  }
`;

const defaultState = {
  date: new Date(),
  type: true,
  amount: '',
  comment: '',
  category: '',
};

export function ModalAddTransaction() {
  const [transaction, setTransaction] = React.useState(defaultState);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setTransaction(defaultState);
    setIsOpen(false);
  }
  const handleInputChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    updateTransaction(name, value);
    if (event.target.type === 'checkbox') {
      updateTransaction('category', '');
    }
  };

  const updateTransaction = (name, value) => {
    setTransaction(prev => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <ButtonAddStyled type="button" onClick={openModal}>
        <Plus />
      </ButtonAddStyled>
      <ModalStyled
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        htmlOpenClassName="no-scroll"
      >
        <ButtonCloseStyled type="button" onClick={closeModal}>
          <Close />
        </ButtonCloseStyled>

        <ModalTitle>Add transaction</ModalTitle>

        <TransactionTypeToggle
          transaction={transaction}
          handleInputChange={handleInputChange}
        />
        <ModalForm
          closeModal={closeModal}
          handleInputChange={handleInputChange}
          updateTransaction={updateTransaction}
          transaction={transaction}
        />
        <Button type="button" onClick={closeModal}>
          Cancel
        </Button>
      </ModalStyled>
    </>
  );
}
