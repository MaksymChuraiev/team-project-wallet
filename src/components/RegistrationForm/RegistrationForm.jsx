import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, useFormikContext } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
// import { nanoid } from 'nanoid';
import logo from '../../images/logo.png';
import icon from '../../images/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import operations from '../../redux/auth/auth-operation'

import { register, logIn } from '../../redux/auth/auth-operation';

import {
  InputLabel,
  LogForm,
  InputField,
  ErrorText,
  Input,
} from '../LoginForm/LoginForm.styled';
import { Icon, FormContainer, FormName } from './RegistrationForm.styled';
import Button from '../Button/Button';
import PasswordProgressBar from 'components/PasswordProgressBar/PasswordProgressBar';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const [email, setEmail] = useState();
  const [name,setName] = useState('');

  const style = {
    color: 'red',
    textAlign: 'center',
    fontSize: '12px'
  }
 
  const RegEx  = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

  const schema = yup.object().shape({
    email: yup.string().email().matches(RegEx, 'Email is not  valid').required(),
    password: yup.string().min(6).max(12).required(),
    confirmPassword: yup.string().min(6).max(12).required(),
    name: yup.string().min(1).max(12).required(),
  });

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // const { email, password, name } = values;
      
      const email = values.email.trim();
      const password = values.password.trim();
      const name = values.name.trim();

      const { payload: errorCode } = await dispatch(register({ name, email, password }));

      if (errorCode.name === 'AxiosError') {
        toast.error('This e-mail is already used');
        return;
      }
      await dispatch(logIn({email, password}))
      resetForm();
      navigate('/home-tab', { replace: true });
      toast.success('You are registered');
    } catch (error) {
      toast.error('Oops! Something went wrong...');
    }
  };

  const handleClick = () => {
    navigate('/login');
  };

  // const emailInputId = nanoid();
  // const passwordInputId = nanoid();
  // const ConfirmPasswordInputId = nanoid();
  // const nameInputId = nanoid();

  const FormObserver = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      // setEmail(values.email);
      setPassword(values.password);
      setConfirmPassword(values.confirmPassword);
      setName(values.name);
    }, [values]);
    return null;
  };

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
        <img src={logo} height={40} alt={'wallet-logo'} />
      </FormName>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
        validateOnChange
      >
        <LogForm autoComplete="off">
          <FormObserver />

          <InputLabel htmlFor="email">
            <InputField>
              <Icon width="24" height="24">
                <use href={icon + '#icon-email'} />
              </Icon>
              <Input
                type="email"
                name="email"
                // id={emailInputId}
                placeholder="E-mail"
              />
            </InputField>
            <FormError name="email" />
          </InputLabel>

          <InputLabel htmlFor="password">
            <InputField>
              <Icon width="24" height="24">
                <use href={icon + '#icon-lock'} />
              </Icon>
              <Input
                type="password"
                name="password"
                // id={passwordInputId}
                placeholder="Password"
              />
            </InputField>
            {password && <PasswordProgressBar password={password.length} />}
            {password && password.length < 6 && (
              <p style={style}>Passwords should be at least 6 signs</p>
            )}
            {/* <FormError name="password" /> */}
          </InputLabel>

          <InputLabel htmlFor="confirmPassword">
            <InputField>
              <Icon width="24" height="24">
                <use href={icon + '#icon-lock'} />
              </Icon>
              <Input
                type="password"
                name="confirmPassword"
                // id={ConfirmPasswordInputId}
                placeholder="Confirm password"
              />
            </InputField>
            {confirmPassword && password !== confirmPassword && (
              <p style={style}>Passwords should be the same</p>
            )}

            <FormError name="confirmPassword" />
          </InputLabel>

          <InputLabel htmlFor="name">
            <InputField>
              <Icon width="24" height="24">
                <use href={icon + '#icon-person'} />
              </Icon>
              <Input
                type="text"
                name="name"
                // id={nameInputId}
                placeholder="Name"
              />
            </InputField>
            {/* {name && name.length < 1 && (
              <p style={style}>Name length must be at least 2 characters long</p>
            )} */}
            <FormError name="name" />
          </InputLabel>

          <Button
            buttonTitle="REGISTER"
            password={password}
            confirmPassword={confirmPassword}
            name={name}
            type="submit"
            color="#fff"
            bgColor="#24CCA7"
            border="none"
          />

          <Button
            buttonTitle="LOG IN"
            onClick={handleClick}
            type="button"
            color="#4A56E2"
            bgColor="#ffffff"
            borderColor="#4A56E2"
          />
        </LogForm>
      </Formik>
    </FormContainer>
  );
};

export default RegistrationForm;
