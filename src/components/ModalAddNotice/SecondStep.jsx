import { Formik, ErrorMessage } from 'formik';

import * as yup from 'yup';
import {
  SexIcon,
  SexLabel,
  SexRadioBtn,
  LegendText,
  FieldSet,
  StyledForm,
  StyledInput,
  InputLabel,
  InputWrapper,
  TextArea,
  FileInput,
  ImgWrapper,
  MainBtnsWrapper,
  MainNoticeBtn,
  SexText,
  PetImage,
  StyledErrMsg,
} from './ModalAddNotice.styled';
import { ReactComponent as PlusImg } from '../../img/add-file.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createNotice } from 'redux/notices/notices-operation';

import { selectAccessToken } from 'redux/auth/authSelectors';
import { getLoading } from 'redux/notices/notices-selectors';

import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  sex: yup.string().required('Field is required!'),
  location: yup
    .string()
    .min(2)
    .max(36)
    .matches(
      /(\b[a-zA-Z]+(,\s*)\s*[a-zA-Z]+\b)/g,
      'Only in format "City, Region"'
    )
    .required('Field is required!'),
  sellCategory: yup.boolean(),
  price: yup.string().when('sellCategory', {
    is: true,
    then: yup
      .string()
      .min(1)
      .max(6)
      .matches(/^[1-9]+[0-9]*/g, 'Only number characters are allowed')
      .required('Price is required'),
    otherwise: yup.string().notRequired(),
  }),
  avatar: yup
    .mixed()
    .required('Image is Required!(jpg,jpeg,png)')
    .test(
      'fileFormat',
      'Only .jpg, .jpeg, .png',
      value =>
        value === null ||
        (value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type))
    ),
  comments: yup
    .string()
    .min(8)
    .max(120)
    .matches(/^\D*$/g, 'Only alphabetic characters and symbols are allowed')
    .required('Field is required!'),
});

const SecondStep = ({
  goBack,
  setFormValues,
  formValues,
  closeModal,
  initialValues,
  setIsFirstStep,
}) => {
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);

  const isLoading = useSelector(getLoading);

  const navigate = useNavigate();

  const handleFileChange = (e, setFieldValue) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      setFieldValue('avatar', imgFile);
      setFormValues(values => ({ ...values, avatar: imgFile }));
    }
  };

  const handleInputChange = (e, setFieldValue) => {
    const inputName = e.target.name;
    let value = e.target.value;
    if (inputName === 'location') {
      value = makeFirstUpperCaseAndAfterCommas(value);
    }

    setFieldValue(inputName, value);
    setFormValues(values => ({ ...values, [inputName]: value }));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        ...formValues,
        sellCategory: formValues.category === 'sell' ? true : false,
        price: formValues.category === 'sell' ? formValues.price : '',
      }}
      onSubmit={async values => {
        const formData = (({ sellCategory, ...o }) => o)(values);
        const valuesToSend = {
          ...formData,
          price: formValues.category === 'sell' ? formValues.price : null,
          birthdate: parseDateToISO(formValues.birthdate),
        };
        try {
          await dispatch(createNotice({ valuesToSend, token }));
          setFormValues(initialValues);
          setIsFirstStep(true);
          closeModal();
          navigate('/notices/own');
        } catch (error) {
          toast.error(error.message);
        }
      }}
    >
      {({ setFieldValue }) => (
        <StyledForm>
          <FieldSet>
            <LegendText>The sex*:</LegendText>
            <SexLabel htmlFor="male">
              <SexRadioBtn
                disabled={isLoading}
                type="radio"
                id="male"
                name="sex"
                alt="male"
                value="male"
                onChange={e => handleInputChange(e, setFieldValue)}
              />
              <SexIcon></SexIcon>
              <SexText>Male</SexText>
            </SexLabel>

            <SexLabel htmlFor="female">
              <SexRadioBtn
                disabled={isLoading}
                type="radio"
                id="female"
                name="sex"
                alt="female"
                value="female"
                onChange={e => handleInputChange(e, setFieldValue)}
              />
              <SexIcon isFemale></SexIcon>
              <SexText>Female</SexText>
            </SexLabel>
            <ErrorMessage
              name="sex"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </FieldSet>

          <InputWrapper>
            <InputLabel htmlFor="location" type="text">
              Location*:
            </InputLabel>
            <StyledInput
              disabled={isLoading}
              id="location"
              name="location"
              placeholder="Type location"
              autoComplete="off"
              onChange={e => handleInputChange(e, setFieldValue)}
            />
            <ErrorMessage
              name="location"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          {formValues.category === 'sell' && (
            <InputWrapper>
              <InputLabel htmlFor="price" type="text">
                Price*:
              </InputLabel>
              <StyledInput
                disabled={isLoading}
                id="price"
                name="price"
                placeholder="Type price"
                autoComplete="off"
                onChange={e => handleInputChange(e, setFieldValue)}
              />
              <ErrorMessage
                name="price"
                render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
              />
            </InputWrapper>
          )}

          <InputWrapper imgWrap>
            <InputLabel htmlFor="avatar">Load the pet’s image</InputLabel>
            <ImgWrapper>
              {formValues.avatar ? (
                <PetImage
                  alt="pet-image"
                  src={URL.createObjectURL(formValues.avatar)}
                />
              ) : (
                <PlusImg />
              )}

              <FileInput
                disabled={isLoading}
                id="avatar"
                name="avatar"
                type="file"
                onChange={e => handleFileChange(e, setFieldValue)}
              />
            </ImgWrapper>
            <ErrorMessage
              name="avatar"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel htmlFor="comments" type="text">
              Comments
            </InputLabel>
            <TextArea
              disabled={isLoading}
              component="textarea"
              id="comments"
              name="comments"
              rows="3"
              placeholder="Type comments"
              autoComplete="off"
              onChange={e => handleInputChange(e, setFieldValue)}
            />
            <ErrorMessage
              name="comments"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>
          <MainBtnsWrapper>
            <MainNoticeBtn disabled={isLoading} type="submit" isBgOrange>
              Done
            </MainNoticeBtn>
            <MainNoticeBtn disabled={isLoading} onClick={goBack} type="button">
              Back
            </MainNoticeBtn>
          </MainBtnsWrapper>
          {isLoading && <Loader />}
        </StyledForm>
      )}
    </Formik>
  );
};

export default SecondStep;

function makeFirstUpperCaseAndAfterCommas(str) {
  const string = str.charAt(0).toUpperCase() + str.slice(1);
  return string.replace(/[,\s]\s*([a-z])/g, function (_, e) {
    return ', ' + e.toUpperCase();
  });
}

function parseDateToISO(str) {
  const dateParts = str.split('.');
  const formattedDate = new Date(
    +dateParts[2],
    dateParts[1] - 1,
    +dateParts[0]
  );

  return formattedDate.toISOString();
}
