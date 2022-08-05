import {
  TableMain,
  TableHeader,
  TableHeaderRow,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  TableCellColor,
} from './Table.styled';
import spaceCreator from 'services/spaceCreator';

export const Table = ({ items }) => {
  console.log(items);
  const normTime = data => {
    const year = data.slice(0, 4);
    const month = data.slice(6, 7).padStart(2, '0');
    const day = data.slice(8, 10).padStart(2, '0');

    return `${day}.${month}.${year}`;
  };


	}

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
					</TableHeaderRow>
				</TableHeader>
				<TableBody>
					{items.map(
						({ _id, date, transactionType, category, comment, amount, balance }) => (
							<TableRow key={_id}>
								<TableCell>{normTime(date)}</TableCell>
								<TableCell>{transactionType === true ? '+' : '-'}</TableCell>
								<TableCell>{category}</TableCell>
								<TableCell>{comment}</TableCell>
								<TableCell>
									<TableCellColor
										type={transactionType === true ? 'income' : 'costs'}>{amount}
									</TableCellColor>
								</TableCell>
								<TableCell>{spaceCreator(balance)}</TableCell>
							</TableRow>
						),
					)}
				</TableBody>
			</TableMain>
		</>
	)
}



