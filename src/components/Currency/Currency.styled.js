import styled from '@emotion/styled';
import bgSvg from '../../images/Vector7.png';

export const BankCashContainer = styled.table`
  font-family: var(--modal-toggle-font);
  font-style: normal;
  font-size: 18px;
  line-height: 27px;

  width: 280px;
  margin-right: auto;
  margin-left: auto;

  color: #ffffff;

  background-color: #4a56e2;
  background-image: url(${bgSvg});
  /* linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) -8.67%,
      rgba(255, 255, 255, 0) 116.22%
    ); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  border-radius: 30px;
  border-spacing: 0;

  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) -8.67%, rgba(255, 255, 255, 0) 116.22%); */

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
  /* font-weight: 700; */
  padding: 12px 20px;
  display: block;
  /* justify-content: space-between; */

  /* color: #ffffff; */
  background: rgba(255, 255, 255, 0.2);
  /* background: white;
  opacity: 0.2;
  border-radius: 30px 30px 0px 0px; */
`;

export const TableBody = styled.tbody`
  font-weight: 400;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* text-align: c,enter; */
  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) -8.67%, rgba(255, 255, 255, 0) 116.22%); */
`;

export const TableRow = styled.tr`
  display: flex;
  /* width: 33%; */

  /* justify-content: space-between; */
`;

export const TableDataHead = styled.td`
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  width: 33%;
`;

export const TableData = styled.td`
  /* display: flex; */
  /* justify-content: space-between; */
  width: 33%;
  text-align: center;
`;
