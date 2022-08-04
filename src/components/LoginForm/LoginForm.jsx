import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { logIn } from 'redux/auth/auth-operation';
import { toast } from 'react-toastify';

import * as yup from 'yup';
import svgMail from '../LoginForm/Vector.svg';
import svgLock from '../LoginForm/Vector-lock.svg';
import {
  RegisterBtn,
  LogForm,
  LogBtns,
  LoginBtn,
  Input,
  Svg,
  InputField,
  InputLabel,
  ErrorText,
  SvgWrapper,
} from './LoginForm.styled';
import { Link } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { email, password } = values;

      const { payload: errorCode } = await dispatch(logIn({ email, password }));

      if (errorCode === 401) {
        toast.error('Email or password is wrong');
        resetForm();
        return;
      }
      resetForm();
      navigate('/dashboard');
      toast.success('You are logged in');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <LogForm autoComplete="off">
        <InputLabel htmlFor="email">
          <InputField>
            <SvgWrapper>
              <Svg src={svgMail} alt="convert" />
            </SvgWrapper>
            <Input type="text" name="email" placeholder="E-mail" />
          </InputField>
          <FormError name="email" />
        </InputLabel>
        <InputLabel htmlFor="password">
          <InputField>
            <SvgWrapper>
              <Svg src={svgLock} alt="lock" />
            </SvgWrapper>
            <Input type="password" name="password" placeholder="Password" />
          </InputField>
          <FormError name="password" />
        </InputLabel>
        <LogBtns>
          <LoginBtn type="submit">log in</LoginBtn>
          <Link to="/registration">
            <RegisterBtn type="button">register</RegisterBtn>
          </Link>
        </LogBtns>
      </LogForm>
    </Formik>
  );
};
