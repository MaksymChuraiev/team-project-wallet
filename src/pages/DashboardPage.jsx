import { Header } from 'components/Header/Header';

import { Outlet } from 'react-router-dom';
// import {
//   MainContainer,
//   TableAndNavigationContainer,
//   NavigationContainer,
//   NavHomeIcon,
//   NavStatisticsIcon,
//   NavBankTableIcon,
//   NavLinkStyled,
//   ClientCashContainer,
//   ClientCashContainerText,
//   ClientCashContainerBalance,
//   SymbolDollar,
//   BankCashContainer,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableData,
//   TableDataHead,
// } from './Dashboard.styled';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
// import { Header } from 'components/Header/Header';
// import { HomeTab } from 'components/HomeTab/HomeTab';
import { Navigation } from 'components/Navigation/Navigation';

import { Container, TabletTop, TabletLeft } from './HomeTab.styled';

const DashboardPage = () => {
  return (
    <>
      <>
        <Header />
        <Container>
          <TabletTop>
            <TabletLeft>
              <Navigation />
              <Balance />
              <Currency />
            </TabletLeft>
          </TabletTop>
          <Outlet />
        </Container>
      </>
      {/* <Header />

      <main style={{ display: 'flex' }}>
        <MainContainer>
          <TableAndNavigationContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <NavigationContainer>
                <NavLinkStyled to="home-tab">
                  <NavHomeIcon />
                  Home
                </NavLinkStyled>
                <NavLinkStyled to="statistics">
                  <NavStatisticsIcon />
                  Statistics
                </NavLinkStyled>
                <NavLinkStyled to="banktable">
                  <NavBankTableIcon />
                </NavLinkStyled>
              </NavigationContainer>
              <ClientCashContainer>
                <ClientCashContainerText>your balance</ClientCashContainerText>
                <ClientCashContainerBalance>
                  <SymbolDollar>$</SymbolDollar> 24 000.00
                </ClientCashContainerBalance>
              </ClientCashContainer>
            </div>
            <BankCashContainer> */}
      {/* BankCash table component */}
      {/* <TableHead>
                <TableRow>
                  <TableDataHead>Curensy</TableDataHead>
                  <TableDataHead>Purchase</TableDataHead>
                  <TableDataHead>Sale</TableDataHead>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableData>USD</TableData>
                  <TableData>27.55</TableData>
                  <TableData>27.65</TableData>
                </TableRow>
                <TableRow>
                  <TableData>EUR</TableData>
                  <TableData>30.00</TableData>
                  <TableData>30.10</TableData>
                </TableRow>
                <TableRow>
                  <TableData>UAH</TableData>
                  <TableData>10.00</TableData>
                  <TableData>10.10</TableData>
                </TableRow>
              </TableBody>
            </BankCashContainer>
          </TableAndNavigationContainer>
          <Outlet />
        </MainContainer>
      </main> */}
    </>
  );
};

export default DashboardPage;

// в ProtectedRoute стоит заглушка.
