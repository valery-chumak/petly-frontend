import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;

  @media (min-width: 768px) {
    padding-top: 24px;
    justify-content: baseline;
  }

  @media (min-width: 1300px) {
    padding-top: 20px;
  }
`;

export const StyledMenuContainer = styled.div`
  margin-left: auto;
  margin-right: 25px;

  @media (min-width: 1300px) {
    margin-right: 0;
  }
`;
