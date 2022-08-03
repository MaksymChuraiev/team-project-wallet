import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';

import { Body, Section, NavBalanceCurrencyBox, NavigationBalanceBox } from './HomeTabPage.styled';

const DashboardPage = () => {
	return (
		<>
			<Header />
			<Body>
				<NavBalanceCurrencyBox>
					<NavigationBalanceBox>
						<Navigation />
						<Balance />
					</NavigationBalanceBox>
					<Currency />
				</NavBalanceCurrencyBox>
				<Section>
					<Outlet />
				</Section>
			</Body>
		</>
	);
};

export default DashboardPage;