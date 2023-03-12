import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  padding: 11px 12px;

  width: 280px;
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: ${p => p.theme.fontSizes.c};
  font-family: ${props => props.theme.fonts.input};
  line-height: ${p => p.theme.lineHeights.d};
  background: ${p => p.theme.colors.news.inputBgColor};
  color: ${p => p.theme.colors.news.input};
  letter-spacing: ${p => p.theme.letterSpacing.b};
  box-shadow: ${p => p.theme.colors.news.inputShadow};
  border-radius: ${p => p.theme.radii.md};
  border: 1px solid transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 8px 20px;
    width: 608px;

    font-size: ${p => p.theme.fontSizes.i};
    line-height: ${p => p.theme.lineHeights.e};
    border-radius: ${p => p.theme.radii.lg};
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 20px;

    line-height: ${p => p.theme.lineHeights.f};
    border-radius: ${p => p.theme.radii.md};
  }

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.news.inputBorderHoverColor};
  }
`;

export const Button = styled.button`
  padding: 5px;
  box-sizing: content-box;
  position: absolute;
  top: 8px;
  right: 13px;

  border: none;
  border-radius: 50%;
  outline: transparent;
  background: transparent;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    top: 12px;
  }
`;
