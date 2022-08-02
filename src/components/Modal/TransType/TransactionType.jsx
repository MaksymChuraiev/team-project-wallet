import React from 'react';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { TransactionType, Toggle, TextType } from './TransactionType.styled';

export function TransactionTypeToggle({ transaction, handleInputChange }) {
  return (
    <TransactionType>
      <TextType type={transaction.type}>Income</TextType>
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
      <TextType type={transaction.type}>Expense</TextType>
    </TransactionType>
  );
}
