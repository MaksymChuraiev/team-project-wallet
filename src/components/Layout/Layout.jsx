import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ModalAddTransaction } from '../Modal/ModalAddTransaction/ModalAddTransaction';
// import { ButtonAddTransactions } from '../ButtonAddTransactions/ButtonAddTransactions';

import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from '../../components/Loader/Loader';
// import { LogoutModal } from 'components/Modal/LogoutModal';

import { LayoutStyled, ContainerForBlur } from './Layout.styled';

export const Layout = () => {
  // const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // useEffect(() => {
  //   return navigate('/login');
  // }, []);
  return (
    <>
      <LayoutStyled>
        {!isLoggedIn ? (
          <ContainerForBlur left="45%" />
        ) : (
          <ContainerForBlur left="0px" />
        )}
        {/* <ButtonAddTransactions /> */}
        <ModalAddTransaction />
      </LayoutStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
