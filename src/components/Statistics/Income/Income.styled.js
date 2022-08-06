import styled from '@emotion/styled';

export const IncomeContainer = styled.div`
  font-family: var(--font-main);
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  margin-bottom: 34px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const IncomeText = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const IncomeNumber = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #24cca7;
`;
