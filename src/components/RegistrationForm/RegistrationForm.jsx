import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { TextField, InputAdornment } from '@mui/material';
import logo from '../../images/logo.png';
import icon from '../../images/symbol-defs.svg';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';
import {
    FormContainer,
    ContactField,
    FormName,
    // RegisterButton,
    // LoginButton,
    Icon,
} from './RegistrationForm.styled';
import ButtonGroup from '../Button/Button';


const RegistrationForm = () => {

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
                <ContactField
                    type="email"
                    // component={TextField} 
                    name="email"
                    id={emailInputId}
                    placeholder="E-mail*"
                    
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start" style={{ outline: "none" }}> 
                    //         <Icon width="24" height="24">
                    //           <use href={icon + "#icon-email"} />
                    //         </Icon>
                    //     </InputAdornment>
                    //   ),
                    // }}

                  />
                <ErrorMessage name="e-mail" component="div" />

                <ContactField type="password" name="password" id={passwordInputId} placeholder="Password*" />
                <ErrorMessage name="password" component="div" />

                <ContactField type="password" name="password" id={ConfirmPasswordInputId} placeholder="Confirm password*" />
                <ErrorMessage name="password" component="div" />

                <ContactField type="name" name="name" id={nameInputId} placeholder="First name*" />
                <ErrorMessage name="name" component="div" />
                  
                <ButtonGroup />

                {/* <RegisterButton type="submit">REGISTER</RegisterButton>

                <LoginButton variant="outlined" href="/team-project-wallet/login" type="button">LOG IN</LoginButton> */}
                </Form>
            </Formik>
        </FormContainer> 
  );
};

export default RegistrationForm;