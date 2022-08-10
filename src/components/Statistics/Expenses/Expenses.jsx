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
      {typeof expense === 'string' && <ExpensesNumber>{spaceCreator(expense)}</ExpensesNumber>}
      
    </ExpensesContainer>
  );
};
