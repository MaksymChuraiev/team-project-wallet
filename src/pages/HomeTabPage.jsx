import { Balance } from "components/Balance/Balance";
import { Header } from "components/Header/Header";
import { HomeTab } from "components/HomeTab/HomeTab";

const HomeTabPage = () => {
	return (
		<>
			<Header />
			<Balance />
			<HomeTab />
		</>
	);
};

export default HomeTabPage;