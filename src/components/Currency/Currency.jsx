import {
	BankCashContainer,
	TableHead,
	TableBody,
	TableRow,
	TableData,
	TableDataHead,
} from "./Currency.styled"

export const Currency = () => {

	return (
		<BankCashContainer>
			<TableHead>
				<TableRow>
					<TableDataHead>Curensy</TableDataHead>
					<TableDataHead>Purchase</TableDataHead>
					<TableDataHead>Sale</TableDataHead>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableData>USD</TableData>
					<TableData>27.55</TableData>
					<TableData>27.65</TableData>
				</TableRow>
				<TableRow>
					<TableData>EUR</TableData>
					<TableData>30.00</TableData>
					<TableData>30.10</TableData>
				</TableRow>
				<TableRow>
					<TableData>UAH</TableData>
					<TableData>10.00</TableData>
					<TableData>10.10</TableData>
				</TableRow>
			</TableBody>
		</BankCashContainer>
	)
}