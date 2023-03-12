import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';
import '../ModalNotice/modal.css';
import {
  MainNoticeBtn,
  BtnsWrapper,
  RadioBtn,
  StyledText,
  MainBtnsWrapper,
  RadioBtnText,
  RadioBtnWrapper,
  InputWrapper,
  StyledInput,
  InputLabel,
  StyledErrMsg,
} from './ModalAddNotice.styled';

const today = new Date();

const validationSchema = yup.object({
  title: yup
    .string()
    .min(2)
    .max(48)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  category: yup.string().required('Category is required!'),
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  breed: yup
    .string()
    .min(2)
    .max(24)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  birthdate: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (_, originalValue) {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());

      return parsedDate;
    })
    .typeError('Please enter a valid date')
    .required()
    .min('01.01.1950', 'Date is too early')
    .max(today),
});

const FirstStep = ({
  setFormValues,
  setIsFirstStep,
  closeModal,
  formValues,
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formValues}
      onSubmit={values => {
        setFormValues(prevValues => ({ ...prevValues, ...values }));
        setIsFirstStep(false);
      }}
    >
      {({ values }) => (
        <Form>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur{' '}
          </StyledText>
          <BtnsWrapper>
            <RadioBtnWrapper htmlFor="lostfound">
              <RadioBtn
                type="radio"
                name="category"
                value="lostfound"
                id="lostfound"
                checked={values.category === 'lostfound'}
              />
              <RadioBtnText>lost/found</RadioBtnText>
            </RadioBtnWrapper>
            <RadioBtnWrapper htmlFor="ingoodhands">
              <RadioBtn
                type="radio"
                name="category"
                value="ingoodhands"
                id="ingoodhands"
                checked={values.category === 'ingoodhands'}
              />
              <RadioBtnText>in good hands</RadioBtnText>
            </RadioBtnWrapper>
            <RadioBtnWrapper htmlFor="sell">
              <RadioBtn
                type="radio"
                name="category"
                value="sell"
                id="sell"
                checked={values.category === 'sell'}
              />
              <RadioBtnText>sell</RadioBtnText>
            </RadioBtnWrapper>
            <ErrorMessage
              name="category"
              category
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </BtnsWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="title">
              Tittle of ad*
            </InputLabel>
            <StyledInput
              id="title"
              name="title"
              placeholder="Type name pet"
              autoComplete="off"
            />
            <ErrorMessage
              name="title"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="name">
              Name pet
            </InputLabel>
            <StyledInput
              id="name"
              name="name"
              placeholder="Type name pet"
              autoComplete="off"
            />
            <ErrorMessage
              name="name"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="birthdate">
              Date of birth
            </InputLabel>
            <StyledInput
              id="birthdate"
              name="birthdate"
              placeholder="Type date of birth"
              autoComplete="off"
            />
            <ErrorMessage
              name="birthdate"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="breed">
              Breed
            </InputLabel>
            <StyledInput
              id="breed"
              name="breed"
              placeholder="Type breed"
              autoComplete="off"
            />
            <ErrorMessage
              name="breed"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <MainBtnsWrapper>
            <MainNoticeBtn isBgOrange type="submit">
              Next
            </MainNoticeBtn>
            <MainNoticeBtn onClick={closeModal} type="button">
              Cancel
            </MainNoticeBtn>
          </MainBtnsWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default FirstStep;
