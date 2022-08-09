import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  MainLogo,
  LoginPageDesktopContainer,
} from 'components/LoginForm/LoginForm.styled';
import svgLogo from '../images/Logo.svg';
import svgWallet from '../images/WalletMain.svg';
import {GridContainer} from '../components/RegistrationPageLeft/RegistrationPageLeft.styled'
import LoginPageLeft from 'components/RegistrationPageLeft/LoginPageLeft';
import Container from '@mui/material/Container';

const LoginPage = () => {
  const theme = createTheme({
  breakpoints: {
    values: {
      sm: 320,
      md: 768,
      lg: 1280,
    },
  },
  })
  
  return (
  
  <Container>
        <ThemeProvider theme={theme}>
        <GridContainer
          container spacing={1}
          direction="row"
          maxWidth="1280px"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} md={12} lg={5}>
            <LoginPageLeft/>
          </Grid>
          <Grid item sm={12} md={12} lg={7}>
            <LoginPageDesktopContainer>
        <MainLogo>
          <img src={svgLogo} alt="logo" />
          <img src={svgWallet} alt="wallet" />
        </MainLogo>
        <LoginForm />
      </LoginPageDesktopContainer>
          </Grid>
        </GridContainer>
        </ThemeProvider>
      </Container>
  );
};

export default LoginPage;

