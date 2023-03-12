import { GlobalStyle } from './GlobalStyle';

// import { StyledContainer } from './App.styled';

import SharedLayout from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    // <StyledContainer>
    <>
      <GlobalStyle />
      <SharedLayout />
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
    </>
    // </StyledContainer>
  );
};
