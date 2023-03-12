import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiAccountCircleFill } from 'react-icons/ri';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 14px;
`;

export const StyledIcon = styled(RiAccountCircleFill)`
  color: inherit;
  background-color: inherit;
`;

export const StyledButton = styled(Link)`
  display: flex;

  font-size: ${p => p.theme.fontSizes.b};
  font-weight: ${p => p.theme.fontWeights.preBold};
  line-height: ${p => p.theme.lineHeights.c};
  color: ${p => p.theme.colors.home.secButtonText};
  padding: 8px 28px;
  border: 1px solid rgba(245, 146, 86, 1);
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.home.secButton};
  text-decoration: none;
  max-width: 144px;

  &:hover,
  &:focus {
    background-color: #f7853f;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.i};
    max-width: 181px;
  }

  @media (min-width: 1300px) {
    padding: 10px 28px;
  }
`;
