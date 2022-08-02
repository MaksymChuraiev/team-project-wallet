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
						({ id, Date, Type, Category, Comment, Sum, Balance,
						}) => (
							<TableRow key={id}>
								<TableCell>{Date}</TableCell>
								<TableCell>{Type === true ? '+' : '-'}</TableCell>
								<TableCell>{Category}</TableCell>
								<TableCell>{Comment}</TableCell>
								<TableCell>
									<TableCellColor type={Type === true ? 'income' : 'costs'}>{Sum}</TableCellColor>
								</TableCell>
								<TableCell>{Balance}</TableCell>
							</TableRow>
						),
					)}
				</TableBody>
			</TableMain>
		</>
	)
}