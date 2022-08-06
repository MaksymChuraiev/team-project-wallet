import { IncomeContainer, IncomeText, IncomeNumber } from './Income.styled';

import spaceCreator from 'services/spaceCreator';

export const Income = ({ income }) => {
  return (
    <IncomeContainer>
      <IncomeText>Income:</IncomeText>
      <IncomeNumber>{spaceCreator(income)}</IncomeNumber>
    </IncomeContainer>
  );
};
