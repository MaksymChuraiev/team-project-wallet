import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelector from '../../../redux/transaction/transaction-selectors';
import transactionsOperation from '../../../redux/transaction/transaction-operation';
import Modal from 'react-modal';
import { Form } from '../Form/Form';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Close } from '../../../icons/close.svg';
import { TransactionTypeToggle } from '../TransType/TransactionType';
import {
  ModalStyled,
  ButtonCloseStyled,
  ModalTitle,
  Button,
} from './ModalAddTransaction.styled';

Modal.setAppElement('#root');

const defaultState = {
  date: new Date(),
  type: true,
  amount: '',
  comment: '',
  category: '',
};

export function ModalAddTransaction() {
  const [transaction, setTransaction] = React.useState(defaultState);
  const isModalOpen = useSelector(transactionSelector.isModalAddTransOpen);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(transactionsOperation.getCategory());
  }, [dispatch]);

  function closeModal() {
    setTransaction(defaultState);
    dispatch(transactionsOperation.ModalAddTrans(false));
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
    isModalOpen && (
      <>
        <ModalStyled
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName="modal-overlay"
          contentLabel="Example Modal"
          htmlOpenClassName="no-scroll"
        >
          <ButtonCloseStyled onClick={closeModal}>
            <Close />
          </ButtonCloseStyled>

          <ModalTitle>Add transaction</ModalTitle>

          <TransactionTypeToggle
            transaction={transaction}
            handleInputChange={handleInputChange}
          />
          <Form
            transaction={transaction}
            updateTransaction={updateTransaction}
            handleInputChange={handleInputChange}
          />

          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
        </ModalStyled>
      </>
    )
  );
}
