import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <LayoutContainer>
      </LayoutContainer>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
