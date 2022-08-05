import {
  ExpensesContainer,
  ExpensesText,
  ExpensesNumber,
} from './Expenses.styled';

export const Expenses = ({ expense }) => {
  return (
    <ExpensesContainer>
      <ExpensesText>Expenses:</ExpensesText>
      <ExpensesNumber>{expense}</ExpensesNumber>
    </ExpensesContainer>
  );
};
