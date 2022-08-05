import {
	MobileTransactions,
	MobileTableBox,
	Row,
	RowName,
	RowValue,
	SumRow
} from './MobileTab.styled'
import spaceCreator from 'services/spaceCreator';

export const MobileTab = ({ items }) => {

	const normTime = (data) => {
		const year = data.slice(0, 4);
		const month = data.slice(6, 7).padStart(2, '0');
		const day = data.slice(8, 10).padStart(2, '0');

		return `${day}.${month}.${year}`
	}

	return (
		<MobileTransactions>
			{items.map(({ _id, date, transactionType, category, comment, amount, balance }) => (
				<MobileTableBox key={_id}>
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
						<SumRow type={transactionType === true ? 'income' : 'costs'}>{spaceCreator(amount)}</SumRow>
					</Row>
					<Row>
						<RowName>Balance</RowName>
						<RowValue>{spaceCreator(balance)}</RowValue>
					</Row>
				</MobileTableBox>))}
		</MobileTransactions>
	)
}