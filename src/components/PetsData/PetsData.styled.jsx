import styled from 'styled-components';

export const PetsTitle = styled.h2`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.preBold};
  font-size: ${props => props.theme.fontSizes.i};
  line-height: ${props => props.theme.lineHeights.e};
  /* width: 87px; */
  /* margin-bottom: 24px; */

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.g};
    line-height: ${props => props.theme.lineHeights.d};
    /* width: 113px; */
    /* font-size: 28px; */
    /* margin-bottom: 32px; */
    /* margin-left: 33px; */
  }
  @media screen and (min-width: 1300px) {
    font-size: ${props => props.theme.fontSizes.g};
    line-height: ${props => props.theme.lineHeights.d};
    /* width: 207px; */
    /* margin-bottom: 24px; */
    /* margin-left: 0px; */
  }
`;

export const ButtonWrapper = styled.div`
  /* position: absolute; */
  /* top: 0px; */
  /* right: 0; */
  display: flex;
  align-items: center;
  /* margin-bottom: 31px; */
  /* margin-top: -6px; */

  @media screen and (min-width: 768px) {
    /* position: absolute; */
    /* top: 0px; */
    /* right: 0; */
    /* margin-top: 0; */
  }
  @media screen and (min-width: 1300px) {
    /* position: absolute; */
    /* top: 0px; */
    /* right: 0px; */
    /* margin-top: 0; */
  }
`;

export const ButtonTitle = styled.h3`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.preBold};
  font-size: ${props => props.theme.fontSizes.i};
  line-height: ${props => props.theme.lineHeights.e};
  /* width: 73px; */
  margin-right: 15px;
`;

export const AddButton = styled.button`
  display: flex;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.colors.home.buttonBorder};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.home.buttonBorder};
  color: ${p => p.theme.colors.secondaryBackground};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    background-color: #eb7f3c;
  }
`;

export const Wrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    /* display: flex;
    justify-content: center; */
  }
  @media screen and (min-width: 1300px) {
  }
`;

export const StyledButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
`;

export const Pictures = styled.div`
  width: 280px;
  background: ${props => props.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  padding: 16px 20px 40px 20px;
  margin-bottom: 22px;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.f};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px;
  }
  @media screen and (min-width: 1300px) {
    width: 821px;
    padding: 20px;
  }
`;
export const LoaderUser = styled.div`
  margin: auto;
`;
