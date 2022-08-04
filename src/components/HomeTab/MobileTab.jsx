import {
	MobileTransactions,
	MobileTableBox,
	Row,
	RowName,
	RowValue,
	SumRow
} from './MobileTab.styled'

export const MobileTab = ({ items }) => {

	const normTime = (u) => {
		console.log(u);
		let date = new Date();
		console.log(date);
		let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

		console.log(output);
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
						<SumRow type={transactionType === true ? 'income' : 'costs'}>{amount}</SumRow>
					</Row>
					<Row>
						<RowName>Balance</RowName>
						<RowValue>{balance}</RowValue>
					</Row>
				</MobileTableBox>))}
		</MobileTransactions>
	)
}