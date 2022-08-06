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
import { useState } from 'react';
import { useEffect } from 'react';

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

  const [transType, setTransType] = useState(false);
  const [categories, setCategories] = useState('');
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(Date.now());
  const [comment, setComment] = useState('');
  const [newObjTrans, setNewObjTrans] = useState({});

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
    console.log('NAME,VALUE', name, value);
    setTransaction(prev => ({ ...prev, [name]: value }));
  };

  const handleChange = () => {
    setTransType(!transType);
    if (!transType) {
      setCategories('regular income');
    } else {
      setCategories('food');
    }
  };

  const handleChaked = () => (transType ? 'income' : 'expense');
  const handleSubmit = e => {
    e.preventDefault();
    setNewObjTrans({
      date: date,
      transactionType: transType,
      amount: Number(amount),
      comment: comment,
      category: categories,
    });
  };
  // console.log(checked);
  // console.log(income\expence);
  // console.log(amount);
  // useEffect(() => {
  //   dispatch();
  // }, [newObjTrans]);

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
            resetForm={resetForm}
          />
          {/* <form>
            <input type="checkbox" value={transType} onChange={handleChange} />
            <input type="text" value={handleChaked()} />

            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.currentTarget.value)}
            />
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.currentTarget.value)}
            />
            <input
              type="textarea"
              name=""
              id=""
              value={comment}
              onChange={e => setComment(e.currentTarget.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              add
            </button>
          </form> */}

          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
        </ModalStyled>
      </>
    )
  );
}
