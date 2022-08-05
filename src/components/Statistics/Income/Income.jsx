const {
  IncomeContainer,
  IncomeText,
  IncomeNumber,
} = require('./Income.styled');

export const Income = ({ income }) => {
  return (
    <IncomeContainer>
      <IncomeText>Income:</IncomeText>
      <IncomeNumber>{income}</IncomeNumber>
    </IncomeContainer>
  );
};
