import {
	NavigationContainer,
	NavLinkStyled,
	NavHomeIcon,
	NavStatisticsIcon,
	NavBankTableIcon
} from "./Navigation.styled"

export const Navigation = () => {
	return (
		<NavigationContainer>
			<NavLinkStyled to="home">
				<NavHomeIcon />
				Home
			</NavLinkStyled>
			<NavLinkStyled to="statistics">
				<NavStatisticsIcon />
				Statistics
			</NavLinkStyled>
			<NavLinkStyled to="banktable">
				<NavBankTableIcon />
			</NavLinkStyled>
		</NavigationContainer>
	)
}
