import { Formik, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Label,
  TextModal,
  LabelPhoto,
  ImgPhoto,
  BtnPhoto,
  Textarea,
  CentredTextarea,
  InputFile,
  ButtonGroup,
  ButtonDone,
  ButtonBack,
  Error,
} from './ModalStep.styled';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = yup.object({
  avatar: yup
    .mixed()
    .required('Image is Required! Example: jpg,jpeg,png')
    .test(
      'fileFormat',
      'Unsupported file type',
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ),

  comments: yup
    .string()
    .min(8)
    .max(120)
    .matches(/\D/g, 'Only alphabetic characters and symbols are allowed')
    .required('Comments is a required field'),
});

export default function ModalStepTwo({ next, data, setFormData, prev }) {
  const [fileInput, setFileInput] = useState(data.avatar);

  const handleSubmit = values => {
    next({ ...values }, true);
  };

  const handleInputChange = (e, setFieldValue) => {
    const inputName = e.target.name;
    let value = e.target.value;
    setFieldValue(inputName, value);
    setFormData(values => ({ ...values, [inputName]: value }));
  };

  const selectFile = (e, setFieldValue) => {
    const fileImg = e.target.files[0];

    if (fileImg) {
      setFileInput(fileImg);
      setFieldValue('avatar', fileImg);
      setFormData(values => ({ ...values, avatar: fileImg }));
    }
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue }) => (
        <Form autoComplete="on">
          <TextModal>Add photo and some comments</TextModal>
          <LabelPhoto>
            {fileInput ? (
              <ImgPhoto
                src={URL.createObjectURL(fileInput)}
                alt={fileInput.name}
              />
            ) : (
              <BtnPhoto type="button">{<AiOutlinePlus size="40" />}</BtnPhoto>
            )}
            <InputFile
              type="file"
              name="avatar"
              accept=".jpg, .png, .jpeg"
              onChange={e => selectFile(e, setFieldValue)}
            />
            <ErrorMessage
              name="avatar"
              render={msg => <Error imgError>{msg}</Error>}
            />
          </LabelPhoto>

          <CentredTextarea>
            <Label htmlFor="comments" lastMargin>
              Comments
              <Textarea
                id="comments"
                component="textarea"
                name="comments"
                placeholder="Type comments"
                onChange={e => handleInputChange(e, setFieldValue)}
              ></Textarea>
              <ErrorMessage
                name="comments"
                render={msg => <Error>{msg}</Error>}
              />
            </Label>
          </CentredTextarea>
          <ButtonGroup>
            <ButtonBack type="button" onClick={() => prev(setFieldValue)}>
              Back
            </ButtonBack>
            <ButtonDone type="submit">Done</ButtonDone>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
}
