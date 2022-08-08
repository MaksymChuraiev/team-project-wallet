import { PageCurrensy } from './DashboardPage.styled';
const { Currency } = require('components/Currency/Currency');

const BankTablePage = () => {
	return (
		<PageCurrensy>
			<Currency />
		</PageCurrensy>
	);
};

export default BankTablePage;
