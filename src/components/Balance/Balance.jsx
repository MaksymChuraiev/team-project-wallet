import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionSelectors from 'redux/transaction/transaction-selectors';
import transactionsOperation from 'redux/transaction/transaction-operation';
import spaceCreator from 'services/spaceCreator';

import {
	BalanceWrapper,
	BalanceLabel,
	BalanceSumm,
} from './Balance.styled'

export const Balance = () => {

	let balance = 0;
	const dispatch = useDispatch();
	const allTransaction = useSelector(transactionSelectors.getTransaction);

	useEffect(() => {
		dispatch(transactionsOperation.getAllTransactions());
	}, [dispatch]);

	if (allTransaction.length > 0) {
		const lastTransaction = allTransaction[0]
		balance = lastTransaction.balance
	}

	return (
		<BalanceWrapper>
			<BalanceLabel>Your balance</BalanceLabel>
			<BalanceSumm>&#8372; {spaceCreator(balance)}</BalanceSumm>
		</BalanceWrapper>
	)
}