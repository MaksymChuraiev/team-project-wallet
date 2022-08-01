import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, useFormikContext } from 'formik';
import * as yup from 'yup';
// import { nanoid } from 'nanoid';
import logo from '../../images/logo.png';
import icon from '../../images/symbol-defs.svg';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

import {
  InputLabel,
  LogForm,
  InputField,
  ErrorText,
  Input,
} from '../LoginForm/LoginForm.styled';
import { Icon, FormContainer, FormName } from './RegistrationForm.styled';
import ButtonGroup from '../Button/Button';
import PasswordProgressBar from 'components/PasswordProgressBar/PasswordProgressBar';

const RegistrationForm = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  //  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required(),
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

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { email, password, confirmPassword, name } = values;

    // dispatch(register({ name, email, password }));
    resetForm();
    console.log(email, password, confirmPassword, name);
  };

  // const emailInputId = nanoid();
  // const passwordInputId = nanoid();
  // const ConfirmPasswordInputId = nanoid();
  // const nameInputId = nanoid();

  const FormObserver = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      setPassword(values.password);
      setConfirmPassword(values.confirmPassword);
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
            <FormError name="password" />
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
            <FormError name="name" />
          </InputLabel>

          <ButtonGroup
            register="REGISTER"
            login="LOG IN"
            password={password}
            confirmPassword={confirmPassword}
          />
        </LogForm>
      </Formik>
    </FormContainer>
  );
};

export default RegistrationForm;
