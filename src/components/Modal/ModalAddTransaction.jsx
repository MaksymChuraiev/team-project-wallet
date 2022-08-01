import React, { useEffect, useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTransaction,
//   getTransactionsList,
// } from '../../redux/transactions/transactions-operations';
// import { getCategoriesList } from '../../redux/transactions/transactions-selectors';
import Modal from 'react-modal';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

import { selectStyles } from './selectStyles';
import { ReactComponent as Close } from '../../icons/close.svg';
import { ReactComponent as DateRange } from '../../icons/date-range.svg';

import DropdownIndicator from './DropdownIndicator';
import { TransactionTypeToggle } from './TransType/TransactionType';
import { ButtonAddTransactions } from '../ButtonAddTransactions/ButtonAddTransactions';
import {
  ModalStyled,
  ButtonCloseStyled,
  ModalTitle,
  SelectContainer,
  MoneyDateContainer,
  DateContainer,
  Comment,
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
const categories = {
  incomes: [],
  expenses: ['food', 'house', 'children', 'mistress'],
};

export function ModalAddTransaction() {
  const [transaction, setTransaction] = useState(defaultState);
  const [modalIsOpen, setIsOpen] = useState(false);

  //   const dispatch = useDispatch();
  //   const categories = useSelector(getCategoriesList);

  //   const fetchCategories = useCallback(async () => {
  //     try {
  //       await dispatch(getTransactionsList()).unwrap();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [dispatch]);

  //   useEffect(() => {
  //     if (!categories) {
  //       fetchCategories();
  //     }
  //   }, [categories, fetchCategories]);

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

  const handleSubmit = async e => {
    e.preventDefault();
    //  try {
    //    await dispatch(
    //      addTransaction({
    //        ...transaction,
    //        type: transaction.type ? '-' : '+',
    //        date: format(transaction.date, 'yyyy-MM-dd'),
    //      })
    //    ).unwrap();
    //    closeModal();
    //  } catch (e) {
    //    console.log(e);
    //  }
    console.log('submit', e);
  };

  return (
    <>
      <ButtonAddTransactions openModal={openModal} />
      <ModalStyled
        isOpen={modalIsOpen}
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

        <form id="transaction-form" onSubmit={handleSubmit} autoComplete="off">
          <SelectContainer type={transaction.type}>
            <Select
              key={transaction.type}
              styles={selectStyles(transaction.type)}
              components={{ DropdownIndicator }}
              options={(transaction.type
                ? categories?.expenses
                : categories?.incomes
              )?.map(option => ({ value: option, label: option }))}
              placeholder="Select a category"
              onChange={option => {
                updateTransaction('category', option.value);
              }}
              isSearchable={false}
            />
            <input
              tabIndex={-1}
              className="required-hack-input"
              type="text"
              required
              onChange={() => ({})}
              value={transaction.category}
            />
          </SelectContainer>

          <MoneyDateContainer>
            <label>
              <input
                className="modal-input"
                type="text"
                placeholder="0.00"
                name="amount"
                value={transaction.amount}
                onChange={e => {
                  if (
                    e.target.value === '' ||
                    /^[0-9]*(\.[0-9]?[0-9]?)?$/.test(e.target.value)
                  ) {
                    handleInputChange(e);
                  }
                }}
                required
              />
            </label>

            <DateContainer>
              <DatePicker
                className="modal-input"
                selected={transaction.date}
                onChange={date => {
                  updateTransaction('date', date);
                }}
                dateFormat="dd.MM.yyyy"
              />
              <DateRange />
            </DateContainer>
          </MoneyDateContainer>

          <Comment
            placeholder="Comment"
            name="comment"
            value={transaction.comment}
            onChange={handleInputChange}
          />
        </form>
        <Button type="submit" form="transaction-form">
          Add
        </Button>
        <Button type="button" onClick={closeModal}>
          Cancel
        </Button>
      </ModalStyled>
    </>
  );
}
