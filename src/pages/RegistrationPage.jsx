
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Container from '@mui/material/Container';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import RegistrationPageLeft from 'components/RegistrationPageLeft/RegistrationPageLeft';
import { GridContainer} from '../components/RegistrationPageLeft/RegistrationPageLeft.styled'

const RegistrationPage = () => {
  
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
            <RegistrationPageLeft />
            </Grid>
          <Grid item sm={12} md={12} lg={7}>
              <RegistrationForm />
              
          </Grid>
          
        </GridContainer>
      </ThemeProvider>
      
    </Container>
  );
};

export default RegistrationPage;
