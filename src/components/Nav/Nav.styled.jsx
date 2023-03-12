import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled.div``;

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 60px;
  }

  @media (min-width: 1300px) {
    flex-direction: row;
    gap: 80px;
  }
`;

export const StyledNavItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.h};
  line-height: 1.36;
  font-weight: ${p => p.theme.fontWeights.preBold};
  color: ${p => p.theme.colors.home.primTitle};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.home.secTitle};
  }

  &.active {
    color: ${p => p.theme.colors.home.secTitle};
    font-weight: ${p => p.theme.fontWeights.preBold};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.j};
  }

  @media (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.i};

    &.active {
      text-decoration: underline;
    }
  }
`;
