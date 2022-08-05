import { useDispatch } from 'react-redux';
import {
	TableMain,
	TableHeader,
	TableHeaderRow,
	TableBody,
	TableRow,
	TableHeadCell,
	TableCell,
	TableCellColor
} from "./Table.styled"
import spaceCreator from "services/spaceCreator";
import trashSvg from '../../icons/trash.svg'
import spaceCreator from 'services/spaceCreator';
import transactionsOperation from '../../redux/transaction/transaction-operation';


export const Table = ({ items }) => {
	const dispatch = useDispatch();

	const normTime = data => {
		const year = data.slice(0, 4);
		const month = data.slice(6, 7).padStart(2, '0');
		const day = data.slice(8, 10).padStart(2, '0');

		return `${day}.${month}.${year}`
	}

	const onDelete = _id => {
		dispatch(transactionsOperation.deleteTransactions(_id));
	};

	return (
		<>
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
					{items.map(({
						_id,
						date,
						transactionType,
						category,
						comment,
						amount,
						balance,
					}) => (<TableRow key={_id}>
						<TableCell>{normTime(date)}</TableCell>
						<TableCell>{transactionType === true ? '+' : '-'}</TableCell>
						<TableCell>{category}</TableCell>
						<TableCell>{comment}</TableCell>
						<TableCell>
							<TableCellColor
								type={transactionType === true ? 'income' : 'costs'}
							>
								{spaceCreator(amount)}
							</TableCellColor>
						</TableCell>
						<TableCell>{spaceCreator(balance)}</TableCell>
						<TableCell>
							<ButtonDelete onClick={() => onDelete(_id)}>
								<Trash src={trashSvg} alt="trash" />
							</ButtonDelete>
						</TableCell>
					</TableRow>))}
				</TableBody>
			</TableMain>
		</>)
}

