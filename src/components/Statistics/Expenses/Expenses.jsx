import {
  ExpensesContainer,
  ExpensesText,
  ExpensesNumber,
} from './Expenses.styled';

import spaceCreator from 'services/spaceCreator';

export const Expenses = ({ expense }) => {
  return (
    <ExpensesContainer>
      <ExpensesText>Expenses:</ExpensesText>
      <ExpensesNumber>{spaceCreator(expense)}</ExpensesNumber>
    </ExpensesContainer>
  );
};
