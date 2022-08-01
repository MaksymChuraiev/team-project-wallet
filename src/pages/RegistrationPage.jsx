
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Container from '@mui/material/Container';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import RegistrationPageLeft from 'components/RegistrationPageLeft/RegistrationPageLeft';
import {ContainerForBlur} from '../components/RegistrationPageLeft/RegistrationPageLeft.styled'

const RegistrationPage = () => {
  
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1280,
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
            <RegistrationPageLeft />
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
