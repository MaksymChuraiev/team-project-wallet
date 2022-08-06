import Media from "react-media";
import { Page } from "./HomeTabPage.styled";
const { Currency } = require("components/Currency/Currency")


const BankTablePage = () => {

	return (
		<Media query="(max-width: 767px)">
			<Page>
				<Currency />
			</Page>
		</Media>
	)
}

export default BankTablePage