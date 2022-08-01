import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
// import { TextField, InputAdornment } from '@mui/material';
import logo from '../../images/logo.png';
// import icon from '../../images/symbol-defs.svg';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

import {InputLabel, LogForm, InputField, ErrorText, SvgWrapper, Svg, Input } from '../LoginForm/LoginForm.styled'
import svgMail from '../LoginForm/Vector.svg';
import svgLock from '../LoginForm/Vector-lock.svg';
import {
    FormContainer,
    FormName,
} from './RegistrationForm.styled';
import ButtonGroup from '../Button/Button';
import PasswordProgressBar from 'components/PasswordProgressBar/PasswordProgressBar';

const RegistrationForm = () => {

  //  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    name: yup.string().required(),
  });

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };

const handleSubmit = (values, { resetForm }) => {
  console.log(values);
  const { email, password, confirmPassword, name } = values;
  
    // dispatch(register({ name, email, password }));
  resetForm();
  console.log(email, password, confirmPassword, name);
  };
  
  
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const ConfirmPasswordInputId = nanoid();
  const nameInputId = nanoid();

  const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
  };

  return (
    <FormContainer>
      <FormName>
        <img src={logo} height={40} alt={'wallet-logo'}/>
      </FormName>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        
        onSubmit={handleSubmit}
        validateOnChange
      >
        <LogForm
          autoComplete="off"
          // onChange={(event) => {
          // console.log(event.nativeEvent.data);
          // }}
        >
            
        <InputLabel htmlFor="email">
          <InputField>
            <SvgWrapper><Svg src={svgMail} alt="envelope" /></SvgWrapper>
              <Input type="email" name="email" id={emailInputId} placeholder="E-mail" />
          </InputField>
          <FormError name="email" />
        </InputLabel> 
            
        <InputLabel htmlFor="password">
          <InputField>
            <SvgWrapper><Svg src={svgLock} alt="lock" /></SvgWrapper>
              <Input type="password" name="password" id={passwordInputId} placeholder="Password" />
          </InputField>
          <FormError name="password" />
        </InputLabel>
            
        <InputLabel htmlFor="confirmPassword">
          <InputField>
            <SvgWrapper><Svg src={svgLock} alt="lock" /></SvgWrapper>
              <Input
                type="password"
                name="confirmPassword"
                id={ConfirmPasswordInputId}
                placeholder="Confirm password"
              />
            </InputField>
            <PasswordProgressBar />
          <FormError name="confirmPassword" />
          </InputLabel>

        <InputLabel htmlFor="name">
          <InputField>
            <SvgWrapper><Svg src={svgMail} alt="lock" /></SvgWrapper>
              <Input type="text" name="name" id={nameInputId} placeholder="Name" />
          </InputField>
          <FormError name="name" />
        </InputLabel>
                    
        <ButtonGroup register='REGISTER' login='LOG IN' />
                  
        </LogForm>
      </Formik>
    </FormContainer> 
  );
};

export default RegistrationForm;

