import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { ModalAddTransaction } from '../Modal/ModalAddTransaction';
// import { LogoutModal } from 'components/Modal/LogoutModal';
import { LayoutStyled, Container } from './Layout.styled';


export const Layout = () => {
	// const [modalActive, setModalActive] = useState(true);
	
	return (
		<>
			<LayoutStyled>
				<Container />
				<ModalAddTransaction />
				{/* <LogoutModal active={modalActive} setActive={setModalActive} /> */}
			</LayoutStyled>

			<Suspense fallback={<p>Loading...</p>}>
				<Outlet />
			</Suspense>
		</>
	);
};
