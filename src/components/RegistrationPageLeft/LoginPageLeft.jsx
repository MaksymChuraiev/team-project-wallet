import { FinanceAppContainer, AppImg, LoginPageText } from './LoginPageLeft.styled';
import loginPageImg from '../../images/FrameLogin (1).png';

const LoginPageLeft = () => {

    // const styles = {
    //     marginLeft: '40px',
    // }
    return (
        <FinanceAppContainer>
                <AppImg src={loginPageImg} alt="Finance App" />
                <LoginPageText>Finance App</LoginPageText> 
              </FinanceAppContainer>
    )
}

export default LoginPageLeft;