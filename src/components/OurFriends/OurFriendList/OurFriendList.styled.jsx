import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: grid;

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media screen and (max-width: 767.5px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
