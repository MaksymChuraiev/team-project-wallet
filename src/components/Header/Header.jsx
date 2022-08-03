import LogoSvg from '../../icons/logo.svg';
import ExitSvg from '../../icons/exit.svg';
import { useState } from 'react';
import {
	HeaderCustom,
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

	const [setIsOpen] = useState(false);

	const handleClick = () => {
		// console.log("Click!");
		setIsOpen(true);
	} 
	
	return (
		<HeaderCustom>
			<LogoWrapper>
				<Logo src={LogoSvg} alt="Wallet Logo" />
				<LogoText >Wallet</LogoText>
			</LogoWrapper>

			<HeaderRight>
				<UserName>
					Name
				</UserName>
				<ExitWrapper onClick={handleClick}>
					<ExitLogo src={ExitSvg} alt="Exit" />
					<ExitText>
						Exit
					</ExitText>
				</ExitWrapper>
			</HeaderRight>
		</HeaderCustom >
	)
}


