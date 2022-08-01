import { DashboardIcon } from 'components/DashboardIcon/DashboardIcon';
import { Header } from 'components/Header/Header';
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
      <Header />

      <main style={{ display: 'flex' }}>
        <MainContainer>
          <TableAndNavigationContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <NavigationContainer>
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
              <ClientCashContainer>
                <ClientCashContainerText>your balance</ClientCashContainerText>
                <ClientCashContainerBalance>
                  <SymbolDollar>$</SymbolDollar> 24 000.00
                </ClientCashContainerBalance>
              </ClientCashContainer>
            </div>
            <BankCashContainer>
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
