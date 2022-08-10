import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ModalAddTransaction } from '../Modal/ModalAddTransaction/ModalAddTransaction';

import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from '../../components/Loader/Loader';

import { LayoutStyled, ContainerForBlur } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <LayoutStyled>
        {!isLoggedIn ? (
          <ContainerForBlur left="45%" />
        ) : (
          <>
            <ContainerForBlur left="0px" isLoggedIn={isLoggedIn} />
          </>
        )}

        <ModalAddTransaction />
      </LayoutStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
