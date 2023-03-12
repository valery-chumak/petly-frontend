import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import {
  LoginContainer,
  LinkToRegister,
  ShowPassword,
  DontLog,
  Title,
  ErrBox,
  Input,
  Button,
  ErrorInput,
  InputBox,
} from './LoginForm.styled';
import { IconEyeSlash, IconEye } from '../AuthForm.styled';

import React from 'react';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const passwordRexExp = /^\S{7,32}$/;
  // const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => {
    setShowPass(!showPass);
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email is not valid')
      .required('Email is required'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters')
      .max(32)
      .matches(/^\S{7,32}$/, 'The password should not contain a space')
      .matches(passwordRexExp, 'Password is not valid')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,

    onSubmit: values => {
      dispatch(login(values));
      formik.resetForm();
    },
  });

  return (
    <>
      <LoginContainer>
        <Title>Login</Title>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <InputBox>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <ErrorInput>{formik.errors.email}</ErrorInput>
            )}
          </InputBox>
          <InputBox>
            <Input
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type={!showPass ? 'password' : 'text'}
            />
            <ShowPassword onClick={showPassword}>
              {!showPass ? <IconEyeSlash /> : <IconEye />}
            </ShowPassword>
            {/* <ForgotPassword type="button">Forgot password?</ForgotPassword> */}
            {formik.errors.password && formik.touched.password && (
              <ErrBox>{formik.errors.password}</ErrBox>
            )}
          </InputBox>

          <Button type="submit">Login</Button>
        </form>
        <DontLog>
          Don't have an account?{' '}
          <LinkToRegister to="/register">Register</LinkToRegister>{' '}
        </DontLog>
      </LoginContainer>
    </>
  );
};
