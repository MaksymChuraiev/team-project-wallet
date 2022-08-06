import { useDispatch } from 'react-redux';
import {
  MobileTransactions,
  MobileTableBox,
  Row,
  RowName,
  RowValue,
  SumRow,
  MobileButtonDelete,
  Trash,
} from './MobileTab.styled';
import trashSvg from '../../icons/trash.svg';
import spaceCreator from 'services/spaceCreator';

import transactionsOperation from '../../redux/transaction/transaction-operation';

export const MobileTab = ({ items }) => {
  const dispatch = useDispatch();

  const normTime = data => {
    const year = data?.slice(0, 4);
    const month = data?.slice(6, 7).padStart(2, '0');
    const day = data?.slice(8, 10).padStart(2, '0');

    return `${day}.${month}.${year}`;
  };

  const onDelete = _id => {
    dispatch(transactionsOperation.deleteTransactions(_id));
  };

  return (
    <MobileTransactions>
      {items?.map(
        ({
          _id,
          date,
          transactionType,
          category,
          comment,
          amount,
          balance,
        }) => (
          <MobileTableBox
            key={_id}
            type={transactionType === true ? 'income' : 'costs'}
          >
            <Row>
              <RowName>Date</RowName>
              <RowValue>{normTime(date)}</RowValue>
            </Row>
            <Row>
              <RowName>Type</RowName>
              <RowValue>{transactionType === true ? '+' : '-'}</RowValue>
            </Row>
            <Row>
              <RowName>Category</RowName>
              <RowValue>{category}</RowValue>
            </Row>
            <Row>
              <RowName>Comment</RowName>
              <RowValue>{comment}</RowValue>
            </Row>
            <Row>
              <RowName>Sum</RowName>
              <SumRow type={transactionType === true ? 'income' : 'costs'}>
                {/* {spaceCreator(amount)} */}
                {amount}
              </SumRow>
            </Row>
            <Row>
              <RowName>Balance</RowName>
              {/* <RowValue>{spaceCreator(balance)}</RowValue> */}
              <RowValue>{balance}</RowValue>
            </Row>

            <MobileButtonDelete onClick={() => onDelete(_id)}>
              <Trash src={trashSvg} alt="trash" />
            </MobileButtonDelete>
          </MobileTableBox>
        )
      )}
    </MobileTransactions>
  );
};
