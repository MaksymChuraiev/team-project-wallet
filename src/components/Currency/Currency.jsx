import {
	BankCashContainer,
	TableHead,
	TableBody,
	TableRow,
	TableData,
	TableDataHead,
} from "./Currency.styled"
import { useState, useEffect } from "react"
import fetchCurrency from "services/fetchCurrency"


export const Currency = () => {
	const [cur, setCur] = useState([])

	useEffect(() => {
		fetchCurrency().then(c => setCur(c))
	}, [])

	const fix = (num) => {
		const fixTwo = Number(num).toFixed(2)
		return fixTwo;
	}
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
				{cur.map(({ ccy, buy, sale }) => (
					<TableRow key={ccy}>
						<TableData>{ccy}</TableData>
						<TableData>{fix(buy)}</TableData>
						<TableData>{fix(sale)}</TableData>
					</TableRow>
				))
				}
			</TableBody>
		</BankCashContainer >
	)
}