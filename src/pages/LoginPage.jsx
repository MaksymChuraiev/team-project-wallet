import { LoginForm } from "components/LoginForm/LoginForm";
import { PageContainer, MainLogo } from "components/LoginForm/LoginForm.styled";
import svgLogo from "../components/LoginForm/Logo.svg";
import svgWallet from "../components/LoginForm/WalletMain.svg";

const LoginPage = () => {
  return <PageContainer>
  <MainLogo>
  <img src={svgLogo} alt="logo" />
  <img src={svgWallet} alt="wallet" />
  </MainLogo>
  <LoginForm/>
  </PageContainer>;
};

export default LoginPage;
