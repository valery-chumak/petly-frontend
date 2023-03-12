import AuthForm from '../AuthForm';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/authOperations';

import { RegisterStepOne } from './RegisterStepOne/RegisterStepOne';
import { RegisterStepTwo } from './RegisterStepTwo/RegisterStepTwo';

import { TitleForm, BoxLink, LinkAuth } from '../AuthForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = async (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      try {
        await dispatch(register(newData));
      } catch (error) {
        toast.error(error);
      }
      return;
    }

    setCurrentStep(prev => prev + 1);
  };
  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <RegisterStepOne next={handleNextStep} data={data} />,
    <RegisterStepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <AuthForm>
      <TitleForm>Registration</TitleForm>
      {steps[currentStep]}
      <BoxLink>
        Already have an account?
        <LinkAuth to="/login">Login</LinkAuth>
      </BoxLink>
    </AuthForm>
  );
};
