import { FinanceAppContainer, AppImg, RegistrationPageText } from './RegistrationPageLeft.styled';
import loginPageImg from '../../images/FrameLogin (1).png';

const LoginPageLeft = () => {

    const styles = {
        marginLeft: '40px',
    }
    return (
        <FinanceAppContainer>
                <AppImg src={loginPageImg} alt="Finance App" />
                <RegistrationPageText style={styles}>Finance App</RegistrationPageText> 
              </FinanceAppContainer>
    )
}

export default LoginPageLeft;