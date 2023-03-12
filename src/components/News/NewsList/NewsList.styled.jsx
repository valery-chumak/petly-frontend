import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 60px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
