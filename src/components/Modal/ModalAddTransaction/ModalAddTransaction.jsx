import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelector from '../../../redux/transaction/transaction-selectors';
import transactionsOperation from '../../../redux/transaction/transaction-operation';
import Modal from 'react-modal';
import { Form } from '../Form/Form';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Close } from '../../../icons/close.svg';
import {
  ModalStyled,
  ButtonCloseStyled,
  ModalTitle,
  Button,
} from './ModalAddTransaction.styled';

Modal.setAppElement('#root');

const defaultState = {
  date: new Date(),
  transactionType: true,
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
    dispatch(transactionsOperation.ModalAddTrans(false));
    resetForm();
  }

  function resetForm() {
    return setTransaction(defaultState);
  }

  const handleInputChange = event => {
    const { name, value, checked, type } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    updateTransaction(name, inputValue);

    if (type === 'checkbox') {
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

          <Form
            transaction={transaction}
            updateTransaction={updateTransaction}
            handleInputChange={handleInputChange}
            closeModal={closeModal}
          />

          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
        </ModalStyled>
      </>
    )
  );
}
