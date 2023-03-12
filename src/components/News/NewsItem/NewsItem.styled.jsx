import styled from 'styled-components';

export const Line = styled.span`
  margin-bottom: 13px;
  display: block;

  width: 200px;
  height: 4px;

  background: ${p => p.theme.colors.news.gradient};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.colors.news.shadow};

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 340px;
  }
`;

export const Item = styled.li`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.f};
  letter-spacing: ${p => p.theme.letterSpacing.a};
`;

export const Description = styled.p`
  margin-bottom: 20px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    -webkit-line-clamp: 6;
  }
  @media screen and (min-width: 1280px) {
    -webkit-line-clamp: 5;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.time`
  color: ${p => p.theme.colors.news.date};
`;

export const Link = styled.a`
  font-weight: ${p => p.theme.fontWeights.preBold};
  text-decoration-line: underline;
  color: ${p => p.theme.colors.news.readMore};
  outline: transparent;

  &:hover,
  &:focus {
    scale: 1.1;
    color: ${p => p.theme.colors.news.readMoreFocus};
  }
`;
