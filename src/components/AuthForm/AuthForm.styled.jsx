import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export const AuthContainer = styled.div`
  text-align: center;
  margin-bottom: 45px;

  @media (min-width: 768px) {
    width: 608px;
    margin-top: 80px;

    margin-left: auto;
    margin-right: auto;
    padding: 60px 80px;
    background: #fff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }

  @media (min-width: 1300px) {
    width: 618px;
    margin-top: 60px;
  }
`;

export const ShowBtn = styled.button`
  padding: 5px 6px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-47%);
  cursor: pointer;
`;
export const IconEye = styled(BsEye)`
  font-size: 28px;
  fill: ${p => p.theme.colors.login.secButton};
`;
export const IconEyeSlash = styled(BsEyeSlash)`
  font-size: 28px;
  fill: ${p => p.theme.colors.login.secButton};
`;
export const LinkAuth = styled(Link)`
  margin-left: 3px;
  color: ${p => p.theme.colors.login.secFormText};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.home.secButton};
  }
`;
export const InputForm = styled.input`
  width: 100%;
  height: 40px;
  padding: 11px 14px;

  background-color: ${p => p.theme.colors.login.bgInput};
  border: 1px solid ${p => p.theme.colors.login.borderInput};
  border-radius: ${p => p.theme.radii.lg};

  @media (min-width: 768px) {
    height: 52px;
    padding: 14px 32px;
  }

  &::placeholder {
    color: ${p => p.theme.colors.login.placeholderInput};
    font-size: ${p => p.theme.fontSizes.b};

    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.d};
    }
  }

  &:focus {
    outline: none;
    box-shadow: rgb(51 51 51 / 11%) 0px 3px 9px;
    border-color: ${p => p.theme.colors.login.secButton};
  }
`;
export const InputBox = styled.div`
  position: relative;
  margin-bottom: ${({ lastMargin }) => (lastMargin ? '40px' : '16px')};
`;
export const ErrorInput = styled.div`
  color: rgb(228, 70, 70);
  position: absolute;
  bottom: -15px;
  font-size: ${p => p.theme.fontSizes.a};
  left: 24px;
`;
export const ButtonForm = styled.button`
  width: 100%;
  padding: 8.5px;
  margin-bottom: ${({ lastMargin }) => (lastMargin ? '16px' : '40px')};
  border: none;
  background-color: ${p => p.theme.colors.login.secButton};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: ${p => p.theme.fontSizes.i};
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #eb7f3c;
  }

  @media (min-width: 768px) {
    padding: 10.5px;
  }
`;

export const TitleForm = styled.div`
  margin-bottom: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.f};
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  @media (min-width: 768px) {
    font-size: 36px;
    font-weight: ${p => p.theme.fontWeights.preBold};
  }
`;
export const BoxLink = styled.div`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.a};
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.login.firstFormText};
`;
