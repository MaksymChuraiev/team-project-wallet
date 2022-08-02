import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalAddTransaction } from '../Modal/ModalAddTransaction';
import { LayoutStyled, Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <Container />
        {/* <h1>Layout</h1> */}
        <ModalAddTransaction />
      </LayoutStyled>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
