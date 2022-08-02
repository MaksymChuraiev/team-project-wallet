import LogoSvg from '../../icons/logo.svg';
import ExitSvg from '../../icons/exit.svg';
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
} from './Header.styled';

export const Header = () => {

	return (
		<HeaderCastom>
			<LogoWrapper>
				<Logo src={LogoSvg} alt="Wallet Logo" />
				<LogoText >Wallet</LogoText>
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