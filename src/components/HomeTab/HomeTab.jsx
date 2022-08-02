import {
	Section
} from './HomeTab.styled'
import { MobileTab } from './MobileTab'
import { Table } from './Table';

import transactions from "./transactions.json"

export const HomeTab = () => {

	return (
		<Section>
			<MobileTab items={transactions} />

			<Table items={transactions} />
		</Section>
	)
}