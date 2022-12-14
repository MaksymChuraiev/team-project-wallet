import { useDispatch } from 'react-redux';
import EllipsisText from "react-ellipsis-text";
import {
	TableMain,
	TableHeader,
	TableHeaderRow,
	TableBody,
	TableRow,
	TableHeadCell,
	TableCell,
	TableCellColor,
	ButtonDelete,
	Trash,
} from './Table.styled';
import spaceCreator from 'services/spaceCreator';
import trashSvg from '../../icons/trash.svg';
import transactionsOperation from '../../redux/transaction/transaction-operation';
import noTransactionsImg from '../../images/no-record-available.png';
// import transactionSelector from '../../redux/transaction/transaction-selectors'

export const Table = ({ items }) => {
	const dispatch = useDispatch();
	// const isLoading = useSelector(transactionSelector.isLoading)

	const styles = {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '50px',
		justifyContentItems: 'center',
		alignItems: 'center',
		gap: '20px',
		color: '#4A56E2',
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
					<img src={noTransactionsImg} alt="no record available" width='400px' />
				</div> :
				<TableMain>
					<TableHeader>
						<TableHeaderRow>
							<TableHeadCell>date</TableHeadCell>
							<TableHeadCell>type</TableHeadCell>
							<TableHeadCell>category</TableHeadCell>
							<TableHeadCell>comment</TableHeadCell>
							<TableHeadCell>sum</TableHeadCell>
							<TableHeadCell>balance</TableHeadCell>
							<TableHeadCell> </TableHeadCell>
						</TableHeaderRow>
					</TableHeader>
					<TableBody>
						{items.map(
							({
								_id,
								date,
								transactionType,
								category,
								comment,
								amount,
								balance,
							}) => (
								<TableRow key={_id}>
									<TableCell>{date && normTime(date)}</TableCell>
									<TableCell>{transactionType ? '+' : '-'}</TableCell>
									<TableCell>{category}</TableCell>
									<TableCell>
										{comment && <EllipsisText length={10} text={comment} />}
									</TableCell>
									<TableCell>
										<TableCellColor type={transactionType ? 'income' : 'expense'}>
											{
												// isLoading
												typeof amount === 'number'
													? <EllipsisText length={10} text={spaceCreator(amount)} />
													: <p>...</p> }
										</TableCellColor>
									</TableCell>
									<TableCell>
										{typeof balance === 'number'
											? <EllipsisText length={10} text={spaceCreator(balance)} />
											: <p>...</p>
										}
										
									</TableCell>
									<TableCell>
										<ButtonDelete onClick={() => onDelete(_id)}>
											<Trash src={trashSvg} alt="trash" />
										</ButtonDelete>
									</TableCell>
								</TableRow>
							)
						)}
					</TableBody>
				</TableMain>
			}
		</>
	);
};
