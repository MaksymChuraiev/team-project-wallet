import { FinanceAppContainer, AppImg, RegistrationPageText } from './RegistrationPageLeft.styled';
import homePageImg from '../../images/Frame-min.png';

const RegistrationPageLeft = () => {

    return (
        <FinanceAppContainer>
                <AppImg src={homePageImg} alt="Finance App" />
                <RegistrationPageText>Finance App</RegistrationPageText> 
              </FinanceAppContainer>
    )
}

export default RegistrationPageLeft;