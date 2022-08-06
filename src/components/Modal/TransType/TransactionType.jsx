import React from 'react';
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
