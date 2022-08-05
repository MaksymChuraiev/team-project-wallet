import Media from 'react-media';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { MobileTab } from './MobileTab';
import { Table } from './Table';
import { Balance } from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';

import transactionSelectors from 'redux/transaction/transaction-selectors';
import transactionsOperation from 'redux/transaction/transaction-operation';

export const HomeTab = () => {

	const dispatch = useDispatch();
	const allTransaction = useSelector(transactionSelectors.getTransaction);

	useEffect(() => {
		dispatch(transactionsOperation.getAllTransactions());
	}, [dispatch]);

	return (
		<>
			<Media queries={{ small: { maxWidth: 767 } }}>
				{matches =>
					matches.small ? (
						<>
							<Balance />
							{allTransaction && <MobileTab items={allTransaction} />}
						</>
					) : (
						allTransaction && <Table items={allTransaction} />
					)
				}
			</Media>

			<ButtonAddTransactions />
		</>
	);
};

