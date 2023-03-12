import styled from 'styled-components';

// import 'react-phone-number-input/style.css';
import InputMask from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const ButtonPrev = styled.button`
  width: 100%;
  padding: 6.5px;
  margin-bottom: 40px;
  border: 2px solid ${p => p.theme.colors.login.secButton};
  background-color: ${p => p.theme.colors.login.primButton};
  color: ${p => p.theme.colors.primButtonText};
  border-radius: ${p => p.theme.radii.lg};
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: ${p => p.theme.fontSizes.i};
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.login.secButton};
    color: ${p => p.theme.colors.white};
  }

  @media (min-width: 768px) {
    padding: 10.5px;
  }
`;

export const InputMaskPhone = styled(InputMask)`
  position: relative;

  & .PhoneInputCountry {
    position: absolute;
    height: 50px;
    border-right: 1px solid ${p => p.theme.colors.login.borderInput};
    margin-left: 16px;
    padding-right: 8px;
  }

  & .PhoneInputInput {
    width: 100%;
    height: 40px;
    padding: 11px 14px 11px 65px;

    background-color: ${p => p.theme.colors.login.bgInput};
    border: 1px solid ${p => p.theme.colors.login.borderInput};
    border-radius: ${p => p.theme.radii.lg};

    @media (min-width: 768px) {
      height: 52px;
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
  }
`;
