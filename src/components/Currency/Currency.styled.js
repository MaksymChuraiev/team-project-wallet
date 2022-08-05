import styled from '@emotion/styled';

export const BankCashContainer = styled.table`
  font-family: 'Circe';
  font-style: normal;
  font-size: 18px;
  line-height: 27px;

	width: 280px;
	margin-right: auto;
	margin-left: auto;

  color: #ffffff;
	background-color: #4A56E2;
	border-radius: 30px;
	border-spacing: 0;

	@media screen and (max-width: 767px) {
	margin-top: 32px;
  }
  @media screen and (min-width: 768px) {
    display: block;
    height: 182px;
    width: 336px;
		
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
		margin-left: 0px;
    margin-top: 32px;
    width: 395px;
    min-height: 347px;
  }
`;

export const TableHead = styled.thead`
  font-weight: 700;
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
  display: flex;
  justify-content: space-between;
`;

export const TableDataHead = styled.td`
`;

export const TableData = styled.td`
`;