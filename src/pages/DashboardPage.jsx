import { DashboardIcon } from 'components/DashboardIcon/DashboardIcon';
import { Suspense } from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import {
  MainContainer,
  TableAndNavigationContainer,
  NavigationContainer,
  NavHomeIcon,
  NavStatisticsIcon,
  NavBankTableIcon,
  NavLinkStyled,
  ClientCashContainer,
  ClientCashContainerText,
  ClientCashContainerBalance,
  SymbolDollar,
  BankCashContainer,
  TableHead,
  TableBody,
  TableRow,
  TableData,
  TableDataHead,
} from './Dashboard.styled';

const DashboardPage = () => {
  return (
    <>
      <header
        style={{
          maxWidth: 1248,
          margin: '0 auto',
          padding: '0 16px',
          height: 30,
          borderBottom: '1px solid gray',
        }}
      >
        <div>Its header</div>
      </header>

      <main style={{ display: 'flex' }}>
        <MainContainer
        // id="mainContainer"
        // style={{ display: 'flex', margin: '0 auto', padding: '0 16px' }}
        >
          <TableAndNavigationContainer
          // id="leftContainer"
          // style={{
          //   display: 'flex',
          //   flexDirection: 'column',
          //   height: 800,
          //   gap: 20,
          //   paddingRight: 70,
          //   borderRight: '1px solid gray',
          // }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <NavigationContainer
              // id="navContainer"
              // style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <NavLinkStyled to="Home">
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
              <ClientCashContainer
              // id="ClientCashContainer"
              // style={{ backgroundColor: 'blue', padding: 20, borderRadius: 5 }}
              >
                <ClientCashContainerText>your balance</ClientCashContainerText>
                <ClientCashContainerBalance>
                  <SymbolDollar>$</SymbolDollar> 24 000.00
                </ClientCashContainerBalance>
              </ClientCashContainer>
            </div>
            <BankCashContainer
            // id="BankCashContainer"
            // style={{ backgroundColor: 'blue', padding: 20, borderRadius: 5 }}
            >
              {/* BankCash table component */}
              <TableHead>
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
      </main>
    </>
  );
};

export default DashboardPage;

// в ProtectedRoute стоит заглушка.
