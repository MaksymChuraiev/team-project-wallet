import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { TransactionType, Toggle, TextType } from './TransactionType.styled';

export function TransactionTypeToggle({ transaction, handleInputChange }) {
  const { transactionType } = transaction;

  return (
    <TransactionType>
      <TextType type={transactionType}>Income</TextType>
      <Toggle>
        <input
          type="checkbox"
          name="transactionType"
          onChange={handleInputChange}
          checked={transactionType}
        />
        <div className="thumb">
          <div className="indicator">
            <Plus />
          </div>
        </div>
      </Toggle>
      <TextType type={transactionType}>Expense</TextType>
    </TransactionType>
  );
}

TransactionTypeToggle.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
  transactionType: PropTypes.bool.isRequired,
  amount: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
comment: PropTypes.string,
  }),
  handleInputChange: PropTypes.func.isRequired
};
