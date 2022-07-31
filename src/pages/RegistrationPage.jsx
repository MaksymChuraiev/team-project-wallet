import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homePageImg from '../images/Frame-min.png'
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';
import {
  Container,
  RegistrationPageText,
  FinanceAppContainer,
  ContainerForBlur,
  AppImg,
} from './RegistrationPage.styled';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'



const RegistrationPage = () => {
  
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
    },
  },
})
 
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid
          container spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center">
            <Grid item xs={12} sm={12} md={5}>
              <FinanceAppContainer>
                <AppImg src={homePageImg} alt="Finance App" />
                <RegistrationPageText>Finance App</RegistrationPageText> 
              </FinanceAppContainer>
            </Grid>
            <ContainerForBlur item xs={12} sm={12} md={7}>
              <RegistrationForm />
            </ContainerForBlur>
          
        </Grid>
      </ThemeProvider>
      
    </Container>
    
  );
};

export default RegistrationPage;
