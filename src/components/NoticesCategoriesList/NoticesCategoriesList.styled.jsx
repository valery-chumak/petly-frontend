import styled from 'styled-components';

export const NoticesList = styled.ul`
  list-style: none;
  display: grid;
  flex-direction: column;
  gap: 32px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 18px;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 44px;
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 44px;
  }
`;
