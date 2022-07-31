import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalAddTransaction } from '../Modal/ModalAddTransaction';
import { ButtonAddTransactions } from '../ButtonAddTransactions/ButtonAddTransactions';

import { LayoutStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <h1>Layout</h1>
        {/* <ButtonAddTransactions /> */}
        <ModalAddTransaction />
      </LayoutStyled>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
