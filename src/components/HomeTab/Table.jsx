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

export const Table = ({ items }) => {

	return (
		<>
			<TableMain>
				<TableHeader>
					<TableHeaderRow>
						<TableHeadCell>date</TableHeadCell>
						<TableHeadCell>type</TableHeadCell>
						<TableHeadCell>category</TableHeadCell>
						<TableHeadCell>description</TableHeadCell>
						<TableHeadCell>sum</TableHeadCell>
						<TableHeadCell>balance</TableHeadCell>
					</TableHeaderRow>
				</TableHeader>
				<TableBody>
					{items.map(
						({ _id, date, transactionType, category, comment, amount, balance }) => (
							<TableRow key={_id}>
								<TableCell>{date}</TableCell>
								<TableCell>{transactionType === true ? '+' : '-'}</TableCell>
								<TableCell>{category}</TableCell>
								<TableCell>{comment}</TableCell>
								<TableCell>
									<TableCellColor
										type={transactionType === true ? 'income' : 'costs'}>{amount}
									</TableCellColor>
								</TableCell>
								<TableCell>{balance}</TableCell>
							</TableRow>
						),
					)}
				</TableBody>
			</TableMain>
		</>
	)
}