import styled from 'styled-components';

export const StyledCloseBtn = styled.button`
  border: none;
  width: 34px;
  height: 34px;
  background-color: #fdf7f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: background-color 200ms linear, transform 200ms linear;
  &:hover, :focus {
      background-color: #f59256;
  }
  &:hover, :focus img {
      transform: scale(0.9)
  }
  @media (min-width: 768px) {
    width: 44px;
  height: 44px;
`;

export const StyledIcon = styled.img`
  width: 15.56px;
  height: 15.6px;
  @media (min-width: 768px) {
    width: 20px;
  height: 20px;
`;
