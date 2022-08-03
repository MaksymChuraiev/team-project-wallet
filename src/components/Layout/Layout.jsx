import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalAddTransaction } from '../Modal/ModalAddTransaction/ModalAddTransaction';
import { ButtonAddTransactions } from '../ButtonAddTransactions/ButtonAddTransactions';
import { LayoutStyled, Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <Container />
        <ButtonAddTransactions />
        <ModalAddTransaction />
      </LayoutStyled>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
