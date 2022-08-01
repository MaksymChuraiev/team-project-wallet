import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import background from '../images/BankTableBackground.png';
import background1280 from '../images/BankTableBackground1280.png';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as StatisticsIcon } from '../images/statistics.svg';
import { ReactComponent as TableBankIcon } from '../images/banktable.svg';

export const MainContainer = styled.div`
  width: 100%;
  padding: 20px 16px;
  // background-color: #e7eaf2;

  @media screen and (min-width: 768px) {
    padding: 32px;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    flex-wrap: nowrap;
    max-width: 1280px;
  }
`;

export const TableAndNavigationContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    max-width: 864px;
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    max-width: 464px;
    gap: 28px;
    padding-right: 70px;
    border-right: 1px solid gray;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
    margin-bottom: 16px;
  }
`;

export const NavHomeIcon = styled(HomeIcon)`
  width: 44px;
  height: 44px;
  color: #6e78e8;
  border-radius: 6px;

  a.active > & {
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    color: #4a56e2;
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    border-radius: 2px;
    &.active {
      font-weight: 700;
    }
    a.active > & {
      color: #4a56e2;
      box-shadow: none;
    }
  }
`;

export const NavStatisticsIcon = styled(StatisticsIcon)`
  width: 44px;
  height: 44px;
  color: #6e78e8;
  border-radius: 6px;

  a.active > & {
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    color: #4a56e2;
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    color: #6e78e8;
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    border-radius: 2px;
    &.active {
      font-weight: 700;
    }
    a.active > & {
      color: #4a56e2;
      box-shadow: none;
    }
  }
`;
export const NavBankTableIcon = styled(TableBankIcon)`
  width: 44px;
  height: 44px;
  color: #6e78e8;
  border-radius: 6px;

  a.active > & {
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    color: #4a56e2;
  }
  @media screen and (min-width: 768px) {
    display: none;
    width: 18px;
    height: 18px;
    color: #6e78e8;
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    border-radius: 2px;

    &.active {
      font-weight: 700;
    }
    a.active > & {
      color: #4a56e2;
      box-shadow: none;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0;
  line-height: 0;

  color: #000000;
  &.active {
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media screen and (min-width: 1280px) {
    // padding: 0 16px;
  }
`;

export const ClientCashContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background: #ffffff;
    border-radius: 30px;
    min-height: 80px;
    min-width: 336px;
    padding-left: 40px;
    padding-top: 8px;
    padding-bottom: 12px;
  }
  // @media screen and (min-width: 1280px) {
  //   // padding: 20px 16px;
  // }
`;
export const ClientCashContainerText = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;

  color: #a6a6a6;
`;
export const SymbolDollar = styled.span`
  font-weight: 400;
`;
export const ClientCashContainerBalance = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const BankCashContainer = styled.table`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ffffff;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 182px;
    min-width: 336px;
    background: #ffffff;
    border-radius: 30px;
    margin-left: auto;
    background-image: url(${background});
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    max-width: 464px;
    min-height: 347px;
    background-image: url(${background1280});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export const TableHead = styled.thead`
  background: transparent;
  font-weight: 400;
  padding: 12px 20px;
  display: block;
`;
export const TableBody = styled.tbody`
  background: transparent;
  font-weight: 400;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
