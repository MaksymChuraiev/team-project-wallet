import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../images/home.svg';
import { ReactComponent as StatisticsIcon } from '../../images/statistics.svg';
import { ReactComponent as TableBankIcon } from '../../images/banktable.svg';


export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    flex-direction: column;
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