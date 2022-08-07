import Media from 'react-media';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';

import { useLocation } from 'react-router-dom';

import {
  Page,
  Body,
  Section,
  NavBalanceCurrencyBox,
  NavigationBalanceBox,
} from './HomeTabPage.styled';

const DashboardPage = () => {
  const location = useLocation();
  return (
    <Page>
      <Header />
      <Body>
        <NavBalanceCurrencyBox>
          <NavigationBalanceBox>
            <Navigation />
            <Media query="(min-width: 768px)">
              <Balance />
            </Media>
          </NavigationBalanceBox>
          <Media query="(min-width: 768px)">
            <Currency />
          </Media>
        </NavBalanceCurrencyBox>
        <Section>
          <Outlet />
          <Media query="(max-width: 767px)">
            {location.pathname === '/home-tab' && <ButtonAddTransactions />}
          </Media>
          <Media query="(min-width: 768px)">
            {location.pathname === '/home-tab' && <ButtonAddTransactions />}
          </Media>
        </Section>
        {/* <Media query="(max-width: 767px)">
          {location.pathname === '/home-tab' && <ButtonAddTransactions />}
        </Media> */}
        {/* <Media query="(min-width: 768px)">
          <ButtonAddTransactions />
        </Media> */}
      </Body>
      {/* <Media query="(min-width: 768px)">
        {location.pathname === '/home-tab' && <ButtonAddTransactions />}
      </Media> */}
    </Page>
  );
};

export default DashboardPage;

//    position: sticky;
// left: 92%;
// bottom: 16px;
