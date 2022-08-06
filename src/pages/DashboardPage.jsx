import Media from 'react-media';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
// import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';

import {
  Page,
  Body,
  Section,
  NavBalanceCurrencyBox,
  NavigationBalanceBox,
} from './HomeTabPage.styled';

const DashboardPage = () => {
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
        </Section>
        {/* <ButtonAddTransactions /> */}
      </Body>
    </Page>
  );
};

export default DashboardPage;
