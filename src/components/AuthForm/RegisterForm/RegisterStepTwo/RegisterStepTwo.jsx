import { useFormik } from 'formik';
import * as yup from 'yup';

import { ButtonPrev, InputMaskPhone } from '../RegisterForm.styled';
import {
  InputForm,
  ErrorInput,
  InputBox,
  ButtonForm,
} from '../../AuthForm.styled';

export const RegisterStepTwo = ({ next, data, prev }) => {
  const nameRegex = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/;
  const locationRegex =
    /^[A-ZА-ЯЁАЩЬЮЯҐЄІЇ][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+,\s?[A-ZА-ЯЁАЩЬЮЯҐЄІЇ][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/;
  const phoneRegex = /^\+\d{12}$/;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .matches(nameRegex, 'The name must contain only latin letters'),
    location: yup
      .string()
      .required('City is required')
      .matches(locationRegex, 'City is not valid. Example: Brovary, Kyiv'),
    phone: yup
      .string()
      .required('Phone is required')
      .matches(phoneRegex, 'Phone is not valid'),
  });

  const upperLet = letter => {
    return letter.toUpperCase();
  };

  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: values => {
      const registerValues = { ...values };
      delete registerValues.confirmPassword;
      next(registerValues, true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBox>
        <InputForm
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name.replace(/(^|\s)\S/g, upperLet)}
        />
        {formik.touched.name && formik.errors.name && (
          <ErrorInput>{formik.errors.name}</ErrorInput>
        )}
      </InputBox>
      <InputBox>
        <InputForm
          name="location"
          placeholder="City, region"
          onChange={formik.handleChange}
          value={formik.values.location.replace(/(^|,|\s)\S/g, upperLet)}
        />
        {formik.touched.location && formik.errors.location && (
          <ErrorInput>{formik.errors.location}</ErrorInput>
        )}
      </InputBox>
      <InputBox lastMargin>
        {/* <Input
          name="phone"
          placeholder="Mobile phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        /> */}
        <InputMaskPhone
          defaultCountry="UA"
          international
          // countryCallingCodeEditable={false}
          placeholder="Mobile phone"
          name="phone"
          value={formik.values.phone}
          onChange={e => formik.setFieldValue('phone', e)}
        />
        {formik.touched.phone && formik.errors.phone && (
          <ErrorInput>{formik.errors.phone}</ErrorInput>
        )}
      </InputBox>
      <ButtonForm type="submit" lastMargin>
        Register
      </ButtonForm>
      <ButtonPrev type="button" onClick={() => prev(formik.values)}>
        Back
      </ButtonPrev>
    </form>
  );
};
