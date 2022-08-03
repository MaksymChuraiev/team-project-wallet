import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import transactionSelector from '../../../redux/transaction/transaction-selectors';
import transactionsOperation from '../../../redux/transaction/transaction-operation';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { selectStyles } from './selectStyles';
import { ReactComponent as DateRange } from '../../../icons/date-range.svg';
import DropdownIndicator from '../DropdownIndicator';
import {
  SelectContainer,
  MoneyDateContainer,
  DateContainer,
  Comment,
  Button,
} from './Form.styled';


export function Form ({ transaction, updateTransaction, handleInputChange }) {
  const addTrans = useAddTransition();
  const categories = useSelector(transactionSelector.getCategories);

  const handleSubmit = async e => {
    e.preventDefault();
addTrans(transaction)
  };

  return (
     <>
        <form id="transaction-form" onSubmit={handleSubmit} autoComplete="off">
          <SelectContainer type={transaction.type}>
            <Select
              key={transaction.type}
              styles={selectStyles(transaction.type)}
              components={{ DropdownIndicator }}
              options={(transaction.type
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
      <ToastContainer />
    </>
  );
}

//custom hook
   const useAddTransition = () => {
  const dispatch = useDispatch();

async function addTransaction(transaction) {
      try {
      await dispatch(
        transactionsOperation.addTransactions({
          ...transaction,
          type: transaction.type ? 'expense' : 'income',
          date: format(transaction.date, 'yyyy-MM-dd'),
        })
      );
    toast.success("transaction completed successfully")

} catch (e) {
    toast.error("transaction failed, try again")
    } 

}
  return addTransaction;
};