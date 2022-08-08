import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { selectStyles } from './selectStyles';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as DateRange } from '../../../icons/date-range.svg';
import DropdownIndicator from './DropdownIndicator';
import { TransactionTypeToggle } from '../TransType/TransactionType';
import transactionSelector from '../../../redux/transaction/transaction-selectors';
import transactionsOperation from '../../../redux/transaction/transaction-operation';
import {
  SelectContainer,
  MoneyDateContainer,
  DateContainer,
  Comment,
  Button,
} from './Form.styled';

export function Form({
  transaction,
  updateTransaction,
  handleInputChange,
  closeModal,
}) {
  const { transactionType, date, category, amount, comment } = transaction;
  const addTrans = useAddTransition();
  const categories = useSelector(transactionSelector.getCategories);

  const handleSubmit = async e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const select = e.target.elements.select.value;

    if (!select) {
      toast.error('Select a category from the list');
      return;
    }

    if (amount <= 0) {
      toast.error('Enter a positive amount value');
      return;
    }

    addTrans(transaction);
    closeModal();
  };

  return (
    <>
      <form id="transaction-form" onSubmit={handleSubmit} autoComplete="off">
        <TransactionTypeToggle
          transaction={transaction}
          handleInputChange={handleInputChange}
        />

        <SelectContainer type={transactionType}>
          <Select
            key={transactionType}
            styles={selectStyles(transactionType)}
            components={{ DropdownIndicator }}
            options={(transactionType
              ? categories?.expense
              : categories?.income
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
            name="select"
            type="text"
            value={category}
          />
        </SelectContainer>

        <MoneyDateContainer>
          <label>
            <input
              className="modal-input"
              type="text"
              placeholder="0.00"
              name="amount"
              value={amount}
              onChange={e => {
                if (
                  e.target.value === '' ||
                  /^[0-9]*(\.[0-9]?[0-9]?)?$/.test(e.target.value)
                ) {
                  handleInputChange(e);
                }
              }}
            />
          </label>

          <DateContainer>
            <DatePicker
              className="modal-input"
              selected={date}
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
          value={comment}
          onChange={handleInputChange}
        />
      </form>
      <Button type="submit" form="transaction-form">
        Add
      </Button>
      <ToastContainer />
    </>
  );
}

//custom hook
const useAddTransition = () => {
  const dispatch = useDispatch();

  async function addTransaction(transaction) {
    try {
      const newObj = {
        ...transaction,
        amount: Number(transaction.amount),
        transactionType: !transaction.transactionType,
        date: format(transaction.date, 'yyyy-MM-dd'),
      };
      await dispatch(transactionsOperation.addTransactions(newObj));
      toast.success('Transaction completed successfully');
    } catch (e) {
      toast.error('Transaction failed, try again');
    }
  }
  return addTransaction;
};

Form.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
    transactionType: PropTypes.bool.isRequired,
    amount: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }),
  updateTransaction: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
