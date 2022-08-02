import styled from '@emotion/styled';

export const BankCashContainer = styled.table`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  color: #ffffff;
	
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 182px;
    width: 336px;
    background-color: #4A56E2;
		
    border-radius: 30px;
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    max-width: 464px;
    min-height: 347px;
  }
`;

export const TableHead = styled.thead`
  font-weight: 400;
  padding: 12px 20px;
  display: block;
	background: rgba(255, 255, 255, 0.2);
`;

export const TableBody = styled.tbody`
  font-weight: 400;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) -8.67%, rgba(255, 255, 255, 0) 116.22%);
`;
export const TableRow = styled.tr`
  background: transparent;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
export const TableDataHead = styled.td`
  background: transparent;
  font-weight: 400;
`;
export const TableData = styled.td`
  background: transparent;
  font-weight: 400;
`;