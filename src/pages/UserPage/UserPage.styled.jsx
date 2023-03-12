import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 20px 80px 20px;

  @media screen and (min-width: 768px) {
    align-items: start;
    padding: 0;
    padding-top: 88px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 58px 0px 40px 0px;
  }
`;

export const UserWrapper = styled.div`
  @media screen and (min-width: 1300px) {
    position: sticky;
    top: 58px;
    margin-right: 32px;
  }
`;

export const PetsWrapper = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media screen and (min-width: 1300px) {
    display: block;
  }
`;
// export const ButtonWrapper = styled.div`
//   position: absolute;
//   top: 0px;
//   right: 0;
//   display: flex;
//   align-items: center;
//   margin-bottom: 31px;
//   margin-top: -6px;

//   @media screen and (min-width: 768px) {
//     position: absolute;
//     top: 0px;
//     right: 0;
//     margin-top: 0;
//   }
//   @media screen and (min-width: 1300px) {
//     position: absolute;
//     top: 0px;
//     right: 0px;
//     margin-top: 0;
//   }
// `;
// export const AddButton = styled.button`
//   display: flex;
//   cursor: pointer;
//   width: 40px;
//   height: 40px;
//   padding: 0;
//   justify-content: center;
//   align-items: center;
//   border: ${p => p.theme.colors.home.buttonBorder};
//   border-radius: ${p => p.theme.radii.round};
//   background-color: ${p => p.theme.colors.home.buttonBorder};
//   color: ${p => p.theme.colors.secondaryBackground};
//   position: relative;
//   overflow-x: hidden;
//   overflow-y: hidden;
//   :hover,
//   :focus {
//     transform: scale(1.05);
//     background-color: #eb7f3c;
//   }
// `;

export const UserTitle = styled.h2`
  margin-bottom: 18px;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 38px;
  }
  @media (min-width: 1300px) {
    margin-bottom: 24px;
  }
`;
