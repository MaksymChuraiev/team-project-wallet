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
import noTransactionsImg from '../../images/no-record-available.png';

import transactionsOperation from '../../redux/transaction/transaction-operation';

export const MobileTab = ({ items }) => {
  const dispatch = useDispatch();

const styles = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    justifyContentItems: 'center',
    alignItems: 'center',
    gap: '20px',
    color: '#4A56E2',
    height: '100vh',
    // width: '100%',
    background: '#e7eaf2',
  }

  const normTime = data => {
    const year = data?.slice(0, 4);
    const month = data?.slice(5, 7);
    const day = data?.slice(8, 10);

    return `${day}.${month}.${year}`;
  };

  const onDelete = _id => {
    dispatch(transactionsOperation.deleteTransactions(_id));
  };

  return (
    <>
      {items?.length === 0
      ? <div style={styles}>
        <h2>Sorry, you don't have any transactions yet</h2>
        <img src={noTransactionsImg} alt="no record available" width='250px'/>
      </div> :
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
                  {spaceCreator(amount)}
                  {/* {amount} */}
                </SumRow>
              </Row>
              <Row>
                <RowName>Balance</RowName>
                <RowValue>{spaceCreator(balance)}</RowValue>
                {/* <RowValue>{balance}</RowValue> */}
              </Row>

              <MobileButtonDelete onClick={() => onDelete(_id)}>
                <Trash src={trashSvg} alt="trash" />
              </MobileButtonDelete>
            </MobileTableBox>
          )
        )}
      </MobileTransactions>
        }
    </>
    
  );
};
