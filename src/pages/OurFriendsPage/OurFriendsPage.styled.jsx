import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-items: center;

  @media screen and (min-width: 768px) {
    margin-left: -32px;
    margin-right: -32px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: -16px;
    margin-right: -16px;
  }
`;
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

  @media screen and (min-width: 1300px) {
    padding-top: 72px;
  }
`;
export const PageTitle = styled.h2`
  margin-bottom: 28px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.f};
  line-height: ${p => p.theme.lineHeights.d};

  text-align: center;

  color: #000000;

  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    margin-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.j};
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 60px;
    font-size: ${p => p.theme.fontSizes.j};
  }
`;
