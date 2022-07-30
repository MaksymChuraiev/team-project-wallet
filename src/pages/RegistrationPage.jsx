import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Grid } from '@mui/material'
import logo from '../images/logo.png';
import lock from '../images/symbol-defs.svg';
import homePageImg from '../images/Frame-min.png'
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';
import {
  ContactField,
  RegisterButton,
  FormContainer,
  FormName,
  LoginButton,
  Icon,
  Container,
  RegistrationPageText,
} from './RegistrationPage.styled';

const RegistrationPage = () => {

  //  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    // dispatch(register({ name, email, password }));
  resetForm();
  console.log(name, email, password);
  };
  
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const ConfirmPasswordInputId = nanoid();
  const nameInputId = nanoid();

  return (
    // <div>RegistrationPage</div>;
    <Container>
      <Grid
      container spacing={0}
      // columns={12}
      direction="row"
      justifyContent="center"
      alignItems="center">
        <Grid item xs={12} sm={12} md={5}>
        <img src={homePageImg} alt="Finance App" />
         <RegistrationPageText>Finance App</RegistrationPageText>
      </Grid>
      <Grid item xs={12} sm={12} md={7}>
  <FormContainer>
          <FormName>
            <img src={logo} height={40} alt={'wallet-logo'}/>
          </FormName>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <Form autoComplete="off">
              <ContactField type="email" name="email" id={emailInputId} placeholder="e-mail" />
              <Icon width="24" height="24">
                <use href={lock + "#icon-lock"} />
              </Icon>
              <ErrorMessage name="e-mail" component="div" />

              <ContactField type="password" name="password" id={passwordInputId} placeholder="Password" />
              <ErrorMessage name="password" component="div" />

              <ContactField type="password" name="password" id={ConfirmPasswordInputId} placeholder="Confirm password" />
              <ErrorMessage name="password" component="div" />

              <ContactField type="name" name="name" id={nameInputId} placeholder="First name" />
              <ErrorMessage name="name" component="div" />

              <RegisterButton type="submit">REGISTER</RegisterButton>

              <LoginButton type="button">LOG IN</LoginButton>
            </Form>
          </Formik>
        </FormContainer>
      </Grid>
      
    </Grid>
    </Container>
    
  );
};

export default RegistrationPage;
