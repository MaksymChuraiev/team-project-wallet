import LogoSvg from './Logo.svg';
import ExitSvg from './Exit.svg';
import WalletSvg from './Wallet.svg';
import {
	HeaderCastom,
	LogoWrapper,
	Logo,
	LogoText,
	HeaderRight,
	UserName,
	ExitWrapper,
	ExitLogo,
	ExitText
} from './Appbar.styled';

export const Header = () => {

	return (
		<HeaderCastom>
			<LogoWrapper>
				<Logo src={LogoSvg} alt="Wallet Logo" />
				<LogoText src={WalletSvg} alt="Wallet" />
			</LogoWrapper>

			<HeaderRight>
				<UserName>
					Name
				</UserName>
				<ExitWrapper>
					<ExitLogo src={ExitSvg} alt="Exit" />
					<ExitText>
						Exit
					</ExitText>
				</ExitWrapper>
			</HeaderRight>
		</HeaderCastom >
	)
}