import LogoSvg from '../../icons/logo.svg';
import ExitSvg from '../../icons/exit.svg';
import { useState } from 'react';
import {
	HeaderWraper,
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

	const [setIsOpen] = useState(false);

	const handleClick = () => {
		// console.log("Click!");
		setIsOpen(true);
	} 
	
	return (
		<HeaderWraper>
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
		</HeaderWraper>
	)
}


