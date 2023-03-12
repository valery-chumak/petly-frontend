import { useFormik } from 'formik';
import * as yup from 'yup';

import { useState } from 'react';

import {
  InputForm,
  ErrorInput,
  InputBox,
  ButtonForm,
  ShowBtn,
  IconEye,
  IconEyeSlash,
} from '../../AuthForm.styled';

export const RegisterStepOne = ({ next, data }) => {
  const emailRexExp =
    /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;
  const passwordRexExp = /^\S{7,32}$/;

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email is not valid')
      .matches(emailRexExp, 'Email is not valid')
      .min(10, 'Email must be at least 10 characters')
      .max(63)
      .required('Email is required'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters')
      .max(32)
      .matches(/^[^ ]{7,32}$/, 'The password should not contain a space')
      .matches(
        passwordRexExp,
        'Password must contain any alphabetic characters and special characters'
      )
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .when('password', {
        is: value => (value && value.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('password')], 'Both passwords must be the same'),
      }),
  });

  const handleTogglePassword = ({ currentTarget: { id } }) => {
    if (id === 'pass') {
      setShowPassword(prev => !prev);
    } else if (id === 'confPass') {
      setShowConfirmPassword(prev => !prev);
    }
  };

  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: values => {
      next(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <InputBox>
        <InputForm
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorInput>{formik.errors.email}</ErrorInput>
        )}
      </InputBox>
      <InputBox>
        <InputForm
          name="password"
          type={showPassword ? 'password' : 'text'}
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorInput>{formik.errors.password}</ErrorInput>
        )}
        <ShowBtn type="button" id="pass" onClick={e => handleTogglePassword(e)}>
          {showPassword ? <IconEyeSlash /> : <IconEye />}
        </ShowBtn>
      </InputBox>
      <InputBox lastMargin>
        <InputForm
          type={showConfirmPassword ? 'password' : 'text'}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <ErrorInput>{formik.errors.confirmPassword}</ErrorInput>
        )}
        <ShowBtn
          type="button"
          id="confPass"
          onClick={e => handleTogglePassword(e)}
        >
          {showConfirmPassword ? <IconEyeSlash /> : <IconEye />}
        </ShowBtn>
      </InputBox>
      <ButtonForm type="submit">Next</ButtonForm>
    </form>
  );
};
