import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalAddTransaction } from '../ModalAddTransaction/ModalAddTransaction';
import { LayoutStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <h1>Layout</h1>
        <ModalAddTransaction />
      </LayoutStyled>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
