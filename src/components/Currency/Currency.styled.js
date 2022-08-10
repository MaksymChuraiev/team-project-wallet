import styled from '@emotion/styled';
import bgSvg from '../../images/Vector7.png'

export const BankCashContainer = styled.table`
  font-family: var(--modal-toggle-font);
  font-style: normal;
  font-size: 18px;
  line-height: 27px;

	width: 280px;
	margin-right: auto;
	margin-left: auto;

  color: #ffffff;
	
  background-color: #4A56E2;
  background-image: url(${bgSvg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
 
	border-radius: 30px;
	border-spacing: 0;

	@media screen and (max-width: 767px) {
	margin-top: 32px;
  font-size: 16px;
  
  }
  @media screen and (min-width: 768px) {
    display: block;
    height: 186px;
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
`;

export const TableRow = styled.tr`
  display: flex;
`;

export const TableDataHead = styled.td`
font-weight: 700;
color: #ffffff;
text-align: center;
 width: 33%;
`;

export const TableData = styled.td`
width: 33%;
text-align: center;
font-size: 15px;

@media screen and (min-width: 768px) {
  font-size: 16px;
}
`;

export const LoaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    margin-top: 70px;
}
`;