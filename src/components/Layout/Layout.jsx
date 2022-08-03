import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { ModalAddTransaction } from '../Modal/ModalAddTransaction';
import { LogoutModal } from 'components/Modal/LogoutModal';
import { LayoutStyled, Container } from './Layout.styled';


export const Layout = () => {
	
	return (
		<>
			<LayoutStyled>
				<Container />
				<ModalAddTransaction />
				<LogoutModal modalState='true' />
			</LayoutStyled>


      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
