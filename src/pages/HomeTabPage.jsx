import { Balance } from "components/Balance/Balance";
import { Currency } from "components/Currency/Currency";
import { Header } from "components/Header/Header";
import { HomeTab } from "components/HomeTab/HomeTab";
import { Navigation } from "components/Navigation/Navigation";

import {
	Container,
	TabletTop,
	TabletLeft
} from "./HomeTab.styled"

const HomeTabPage = () => {

	return (
		<>
			<Header />
			<Container>
				<TabletTop>
					<TabletLeft>
						<Navigation />
						<Balance />
					</TabletLeft>
					<Currency />
				</TabletTop>
				<HomeTab />
			</Container>
		</>
	);
};

export default HomeTabPage;