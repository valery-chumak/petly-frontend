import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  display: block;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 1300px) {
    gap: 20px;
  }
`;

export const StyledItem = styled.li`
  list-style: none;
`;

export const StyledButton = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.b};
  font-weight: ${p => p.theme.fontWeights.preBold};
  line-height: ${p => p.theme.lineHeights.c};
  color: ${p => p.theme.colors.home.primButtonText};
  padding: 8px 28px;
  border: 1px solid rgba(245, 146, 86, 1);
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.home.primButton};
  text-decoration: none;
  max-width: 144px;

  &.active,
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.home.secButtonText};
    background-color: ${p => p.theme.colors.home.secButton};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.i};
    max-width: 181px;
  }

  @media (min-width: 1300px) {
    padding: 10px 28px;
  }
`;
