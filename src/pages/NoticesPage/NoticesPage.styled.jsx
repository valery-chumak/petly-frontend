import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 52px;
  padding-bottom: 100px;
  
  font-size: ${p => p.theme.fontSizes.c};
  line-height: ${p => p.theme.lineHeights.d};
  color: ${p => p.theme.colors.home.text};
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 72px;
  }
`;


export const Container = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-left: -32px;
    margin-right: -32px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: -16px;
    margin-right: -16px;
  }
`;

export const PageTitle = styled.h2`
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.f};
  line-height: ${p => p.theme.lineHeights.d};
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) {
     font-size: ${p => p.theme.fontSizes.j};
     margin-bottom: 40px;
  }
  `;

export const ButtonsWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 320px) {
    /* margin-bottom: 30px; */
  }

  @media screen and (min-width: 768px) {
    display: flex;
    /* margin-bottom: 44px; */
  }
  @media screen and (min-width: 768px) {
    /* margin-bottom: 60px; */
  }
`;

export const ContainerWrapp = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 50px;
`;

export const NotFoundText = styled.h2`
  color: ${p => p.theme.colors.home.black};
  font-weight: ${props => props.theme.fontWeights.bold};

  font-size: 18px;
  line-height: 1.38;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
    @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;