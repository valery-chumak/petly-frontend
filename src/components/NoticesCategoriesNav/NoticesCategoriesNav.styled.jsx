import styled from 'styled-components';
import { NavLink as RRNavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
`;

export const NavLink = styled(RRNavLink)`
  font-size: ${p => p.theme.fontSizes.b};
  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.backgroundColor.white};
  margin-bottom: 12px;
  padding: 8px 28px;
  text-decoration: none;
  border: 2px solid ${p => p.theme.colors.home.buttonBorder};
  border-radius: 40px;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  &:not(:last-child) {
    margin-right: 12px;
  }

  &:hover {
    background: ${p => p.theme.colors.home.buttonBorder};
    color: ${p => p.theme.colors.white};
  }
  &.active {
    background: ${p => p.theme.colors.home.buttonBorder};
    color: ${p => p.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 20px;
    padding: 10px 28px;
  }
`;



export const AuthWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 12px;
  }
`;

