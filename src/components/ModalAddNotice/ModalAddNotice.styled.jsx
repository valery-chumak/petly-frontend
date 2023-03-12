import styled from 'styled-components';
import { Field, Form } from 'formik';
import femaleIcon from '../../img/female-icon.png';
import maleIcon from '../../img/male-icon.png';

export const StyledErrMsg = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 3px;
  margin-left: auto;
  align-self: center;
  text-transform: uppercase;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  margin-top: 40px;
  text-align: center;
  @media (min-width: 768px) {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  margin-top: 20px;
  color: #111111;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const RadioBtnWrapper = styled.label`
  position: relative;
  &:first-child {
    margin-bottom: 12px;
    @media (min-width: 768px) {
      margin-bottom: 16px;
    }
  }
  &:nth-child(2) {
    margin-right: 8px;
    @media (min-width: 768px) {
      margin-right: 0;
      margin-left: 12px;
    }
  }
`;
export const RadioBtn = styled(Field)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:checked + span,
  :hover + span,
  :focus + span {
    background-color: #f59256;
    color: #ffffff;
  }
`;

export const RadioBtnText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  padding: 8px 24px;
  background-color: #ffffff;
  color: #111111;
  border-radius: 40px;
  border: 2px solid #f59256;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    padding: 10px 28px;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 28px;
  }
`;

export const StyledInput = styled(Field)`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  position: relative;
  width: 100%;
  height: 40px;
  padding: 12px 14px;
  color: #111111;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  &:focus,
  :hover,
  :active {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
    border: 1px solid #f59256;
    outline: 1px solid #f59256;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    height: 48px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const InputWrapper = styled.div`
  font-size: 18px;
  line-height: 26px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${({ imgWrap }) => (imgWrap ? '20px' : '16px')};

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 28px;
  }
`;

export const MainNoticeBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  border: none;
  width: 240px;
  height: 40px;
  color: #111111;
  background-color: #ffffff;
  border-radius: 40px;
  border: 2px solid #f59256;
  cursor: pointer;
  transition: all 200ms linear;
  &:first-child {
    margin-bottom: 12px;
    @media (min-width: 768px) {
      margin-bottom: 0px;
      margin-left: 12px;
    }
  };
  @media (min-width: 768px){
font-size: 20px;
line-height: 27px;
      width: 180px;
      height: 44px;
  }
  ${({ isBgOrange }) =>
    isBgOrange && 'color:#ffffff; background-color:#f59256 '};
  &:hover,
  :focus {
    background-color: #f59256;
    color: #ffffff;
    ${({ isBgOrange }) =>
      isBgOrange && 'color:#111111; background-color:#ffffff '}
  
`;

export const MainBtnsWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const StyledForm = styled(Form)`
  margin-top: 20px;
`;
export const SexRadioBtn = styled(Field)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  appearance: none;
`;

export const SexIcon = styled.span`
  width: 40px;
  height: 40px;
  background-image: ${({ isFemale }) =>
    isFemale ? `url(${femaleIcon})` : `url(${maleIcon})`};
  margin-bottom: 12px;
  background-size: contain;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-right: 40px;
    @media (min-width: 768px) {
      margin-right: 80px;
    }
  }
  & input:checked ~ span {
    color: #f59256;
  }
`;

export const SexText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LegendText = styled.legend`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 28px;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  margin-bottom: 32px;
  border: none;
  padding: 0;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const FileInput = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  stroke: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const PetImage = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 20px;
  object-fit: cover;
  background: #fdf7f2;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const TextArea = styled(Field)`
  width: 100%;
  padding: 12px 14px;
  color: #000000;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  min-height: 40px;
  max-height: 100%;
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  &:focus,
  :hover,
  :active {
    border: 1px solid #f59256;
    outline: 1px solid #f59256;
  }
  &::placeholder {
    line-height: 19px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    padding: 16px 18px;
    min-height: 113px;
  }
`;
