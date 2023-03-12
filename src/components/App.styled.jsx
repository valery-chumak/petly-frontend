import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1300px) {
    width: 1300px;
    padding: 0 16px;
  }
`;
