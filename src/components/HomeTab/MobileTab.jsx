import {
	MobileTableBox,
	Row,
	RowName,
	RowValue,
	SumRow
} from './MobileTab.styled'

export const MobileTab = ({ items }) => {
	return (
		<ul>
			{items.map(({ id, Date, Type, Category, Comment, Sum, Balance }) => (
				<MobileTableBox key={id}>
					<Row>
						<RowName>Date</RowName>
						<RowValue>{Date}</RowValue>
					</Row>
					<Row>
						<RowName>Type</RowName>
						<RowValue>{Type === true ? '+' : '-'}</RowValue>
					</Row>
					<Row>
						<RowName>Category</RowName>
						<RowValue>{Category}</RowValue>
					</Row>
					<Row>
						<RowName>Comment</RowName>
						<RowValue>{Comment}</RowValue>
					</Row>
					<Row>
						<RowName>Sum</RowName>
						<SumRow type={Type === true ? 'income' : 'costs'}>{Sum}</SumRow>
					</Row>
					<Row>
						<RowName>Balance</RowName>
						<RowValue>{Balance}</RowValue>
					</Row>
				</MobileTableBox>))}
		</ul>
	)
}