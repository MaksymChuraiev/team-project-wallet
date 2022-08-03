import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ModalAddTransaction } from '../Modal/ModalAddTransaction/ModalAddTransaction';
import { ButtonAddTransactions } from '../ButtonAddTransactions/ButtonAddTransactions';

// import { useSelector } from 'react-redux';

import { LogoutModal } from 'components/Modal/LogoutModal';

import { LayoutStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <ButtonAddTransactions />
        <ModalAddTransaction />
        <LogoutModal modalState="true" />
      </LayoutStyled>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
