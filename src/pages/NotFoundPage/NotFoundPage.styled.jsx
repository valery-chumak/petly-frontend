import styled from 'styled-components';
import paws from '../../img/paws.png';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  color: ${p => p.theme.colors.home.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.h};
  line-height: 1.38;
  margin-bottom: 58px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 620px;
    height: 200px;
    font-size: 68px;
    line-height: 1.47;
    padding-left: 32px;
    margin-bottom: 118px;
    text-align: left;
  }
  @media screen and (min-width: 1300px) {
    width: 658px;
    height: 200px;
    padding-left: 16px;
    text-align: left;
    margin-top: 30px;
  }
`;
export const Image = styled.img`
  @media screen and (max-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 600px;
    max-height: 650px;
    margin-left: 61px;
    margin-right: 62px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 770px;
    max-height: 780px;
  }
`;
export const Container = styled.div`
  background-image: url('${paws}');
  background-repeat: no-repeat;
  background-position: bottom 100px left 30px;
  background-size: 60px 130px;
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    background-image: url('${paws}');
    background-position: bottom 150px left 90px;
    background-size: 150px 280px;
    padding-top: 90px;
  }

  @media screen and (min-width: 1300px) {
    background-image: url('${paws}');
    background-position: bottom 150px right 400px;
    background-size: 230px 450px;
    display: flex;
    padding-top: 60px;
  }
`;
export const ImagesWrapper = styled.div`
  @media screen and (min-width: 1300px) {
    width: auto;
    height: 640px;
    margin-left: 0px;
    margin-right: 10px;
  }
`;
export const TextWrapper = styled.div`
  display: block;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 58px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1300px) {
    display: block;
    margin-bottom: 58px;
    text-align: left;
  }
`;
export const StyledLink = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.d};
  line-height: 1.38;
  margin-bottom: 58px;
  line-height: 1.38;
  margin: 0px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.home.secTitle};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.g};
  }

  @media (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.h};
    margin-left: 58px;
  }
`;
export const Line = styled.span`
  display: block;
  width: 220px;
  height: 4px;
  margin-top: 13px;
  margin-left: 28px;
  background: ${p => p.theme.colors.news.gradient};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.colors.news.shadow};

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 8px;
    margin-left: 65x;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;
