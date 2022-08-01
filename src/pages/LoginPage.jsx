import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  LoginPageContainer,
  MainLogo,
  LoginPageDesktopContainer,
  MainFrame,
  MainFrameText,
  SvgFrame
  // EllipseTop,
  // EllipseBottom
} from 'components/LoginForm/LoginForm.styled';
import svgLogo from '../components/LoginForm/Logo.svg';
import svgWallet from '../components/LoginForm/WalletMain.svg';
import svgFrame from '../components/LoginForm/Frame.svg';
// import svgElliseTop from '../components/LoginForm/Ellipse 2.svg';
// import svgEllipseBottom from '../components/LoginForm/Ellipse 1.svg'

const LoginPage = () => {
  return (
    <LoginPageContainer>
      {/* <EllipseTop src={svgElliseTop} alt="svgElilseTop" />
    <EllipseBottom src={svgEllipseBottom} alt="svgEllipseBottom" /> */}
      <MainFrame>
        <SvgFrame src={svgFrame} alt="frame" />
        <MainFrameText>Finance App</MainFrameText>
      </MainFrame>

      <LoginPageDesktopContainer>
        <MainLogo>
          <img src={svgLogo} alt="logo" />
          <img src={svgWallet} alt="wallet" />
        </MainLogo>
        <LoginForm />
      </LoginPageDesktopContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;

