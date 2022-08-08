import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionSelectors from 'redux/transaction/transaction-selectors';
import transactionsOperation from 'redux/transaction/transaction-operation';
import spaceCreator from 'services/spaceCreator';
import Marquee from 'react-double-marquee';

import { BalanceWrapper, BalanceLabel, BalanceSumm } from './Balance.styled';

export const Balance = () => {
  let balance = 0;
  const dispatch = useDispatch();
  const allTransaction = useSelector(transactionSelectors.getTransaction);

  useEffect(() => {
    dispatch(transactionsOperation.getAllTransactions());
  }, [dispatch]);

  if (allTransaction?.length > 0) {
    const lastTransaction = allTransaction[0];
    // balance = lastTransaction.balance;
    balance = spaceCreator(lastTransaction.balance);
  }

  return (
    <BalanceWrapper>
      <BalanceLabel>Your balance</BalanceLabel>
      <BalanceSumm>
        <Marquee
          speed={0.04}
          delay={3000}
          direction={'right'}
          childMargin={20}
          // children={`${balance}`}
          scrollWhen={'always'}
        >
           &#8372; {balance}
          {/* {spaceCreator(balance)} */}
        </Marquee>
      </BalanceSumm>
    </BalanceWrapper>
  );
};
