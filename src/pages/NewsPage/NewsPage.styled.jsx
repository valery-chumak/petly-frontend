import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.f};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    margin-bottom: 55px;

    font-size: ${p => p.theme.fontSizes.j};
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;

  font-size: ${p => p.theme.fontSizes.c};
  line-height: ${p => p.theme.lineHeights.d};
  color: ${p => p.theme.colors.news.text};

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
`;
