import { Section } from 'pages/RegisterPage/RegisterPage.styled';
import React from 'react';
import { LoginForm } from '../../components/AuthForm/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import PuffLoader from 'react-spinners/PuffLoader';

const spinnerStyles = {
  marginTop: '20px',
  marginLeft: '120px',
};
const Login = () => {
  const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <>
      {isLoading ? (
        <PuffLoader
          size={100}
          color={'rgb(245, 146, 86)'}
          cssOverride={spinnerStyles}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Section>
          <LoginForm />
        </Section>
      )}
    </>
  );
};

export default Login;
