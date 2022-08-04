import Media from 'react-media';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MobileTab } from './MobileTab'
import { Table } from './Table';

import transactionSelectors from 'redux/transaction/transaction-selectors';
import transactionsOperation from 'redux/transaction/transaction-operation';
import { Balance } from 'components/Balance/Balance';

export const HomeTab = () => {
	const [state, setState] = useState();
	console.log(state, setState);
	const dispatch = useDispatch();
	const allTransaction = useSelector(transactionSelectors.getTransaction);

	useEffect(() => {
		dispatch(transactionsOperation.getAllTransactions());
	}, [dispatch]);

	return (
		<Media queries={{ small: { maxWidth: 768 } }}>
			{matches =>
				matches.small ? (
					<>
						<Balance />
						<MobileTab items={allTransaction} />
					</>
				) : (
					<Table items={allTransaction} />
				)
			}
		</Media>
	)
}