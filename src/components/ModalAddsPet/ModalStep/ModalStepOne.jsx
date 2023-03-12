import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { parse, isDate } from 'date-fns';

import {
  Label,
  Input,
  ButtonGroup,
  ButtonNext,
  ButtonCancel,
  Error,
} from './ModalStep.styled.jsx';

const today = new Date();

const namePetRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]{2,16}$/;
const breedPetRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії\s]{2,24}$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(namePetRegExp, 'Only alphabetic characters are allowed')
    .required('Name is a required field'),
  birthdate: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (_, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (_, originalValue) {
      const result = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());

      return result;
    })
    .typeError('Please enter a valid date')
    .required()
    .min('01.01.1950', 'Date is too early')
    .max(today),
  breed: yup
    .string()
    .min(2)
    .max(24)
    .matches(breedPetRegExp, 'Only alphanumeric characters are allowed')
    .required('Breed is a required field'),
});

export default function ModalStepOne({ data, next, onClose }) {
  const handleSubmit = values => {
    next({ ...values }, false);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="on">
        <Label htmlFor="name">
          Name pet
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Type name pet"
          />
          <ErrorMessage name="name" render={msg => <Error>{msg}</Error>} />
        </Label>
        <Label htmlFor="birthdate">
          Date of birth
          <Input
            id="birthdate"
            name="birthdate"
            placeholder="Type date of birth"
          />
          <ErrorMessage name="birthdate" render={msg => <Error>{msg}</Error>} />
        </Label>
        <Label htmlFor="breed" lastMargin>
          Breed
          <Input
            id="breed"
            name="breed"
            placeholder="Type breed"
            autoComplete="off"
          />
          <ErrorMessage name="breed" render={msg => <Error>{msg}</Error>} />
        </Label>
        <ButtonGroup>
          <ButtonCancel type="button" onClick={() => onClose()}>
            Cancel
          </ButtonCancel>
          <ButtonNext type="submit">Next</ButtonNext>
        </ButtonGroup>
      </Form>
    </Formik>
  );
}
