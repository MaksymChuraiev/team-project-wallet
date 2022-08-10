import LogoSvg from '../../icons/logo.svg';
import ExitSvg from '../../icons/exit.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
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
  ExitText,
} from './Header.styled';
import { LogoutModal } from '../Modal/LogoutModal';

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);


  const name = useSelector(authSelectors.getUserName);
  const handleClick = () => {
     setModalActive(true);
  };

  return (
    <div>
      <HeaderWraper>
        <HeaderCastom>
          <LogoWrapper>
            <Logo src={LogoSvg} alt="Wallet Logo" />
            <LogoText>Wallet</LogoText>
          </LogoWrapper>

          <HeaderRight>

            <UserName>{name}</UserName>

            <ExitWrapper onClick={handleClick}>
              <ExitLogo src={ExitSvg} alt="Exit" />
              <ExitText>Exit</ExitText>
            </ExitWrapper>
          </HeaderRight>
        </HeaderCastom>
      </HeaderWraper>

      <LogoutModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};
