import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  // LoginPageContainer,
  MainLogo,
  LoginPageDesktopContainer,
  // MainFrame,
  // MainFrameText,
  // SvgFrame
  // EllipseTop,
  // EllipseBottom
} from 'components/LoginForm/LoginForm.styled';
import svgLogo from '../components/LoginForm/Logo.svg';
import svgWallet from '../components/LoginForm/WalletMain.svg';
// import svgFrame from '../components/LoginForm/Frame.svg';
// import svgElliseTop from '../components/LoginForm/Ellipse 2.svg';
// import svgEllipseBottom from '../components/LoginForm/Ellipse 1.svg'
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
     {/* <LoginPageContainer> */}
      {/* <EllipseTop src={svgElliseTop} alt="svgElilseTop" />
    <EllipseBottom src={svgEllipseBottom} alt="svgEllipseBottom" /> */}
      
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
            {/* <MainFrame>
        <SvgFrame src={svgFrame} alt="frame" />
        <MainFrameText>Finance App</MainFrameText>
      </MainFrame> */}
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
      // </LoginPageContainer>
  );
};

export default LoginPage;

