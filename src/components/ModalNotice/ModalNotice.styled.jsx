import styled from 'styled-components';
import { ReactComponent as HeartLogo } from '../../img/heart-icon.svg';

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 40px 40px;
  margin-top: 60px;
   @media (min-width: 768px) {
    margin-top: 0;
  
`;

export const StyledSticker = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #111111;
  background: rgba(255, 255, 255, 0.6);
  width: 158px;
  height: 28px;
  position: absolute;
  top: 20px;
  padding: 6px 0px;
  text-align: center;
  border-radius: 0 20px 20px 0;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-top: 16px;
   @media (min-width: 768px) {
    margin-top: 0;
    max-width: 220px;
`;

export const ImageWrapper = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
    margin-right: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContentText = styled.p`
  font-weight: ${({ isBold }) => (isBold ? '600' : '500')}};
  font-size: 14px;
  line-height: 19px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (min-width: 768px) {
font-size: 16px;
line-height: 22px;
  }
`;

export const CommentsText = styled.p`
  margin-top: 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  width: 100%;
`;

export const NoticeModalBtn = styled.button`
  border: none;
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111111;
  background-color: #ffffff;
  border-radius: 40px;
  border: 2px solid #f59256;
  cursor: pointer;
  transition: all 200ms linear;
  color: #f59256;
  &:hover,
  :focus {
    background-color: #f59256;
    color: #ffffff;
  }
  &:nth-child(2) span {
    color: #111111;
  }
  &:nth-child(2):hover,
  :focus {
    & span {
      color: #ffffff;
    }
  }

  &:nth-child(3) {
    margin-top: 12px;
    color: #f59256;
    &:hover,
    :focus {
      background-color: #fdf7f2;
      color: #111111;
    }
  }

  @media (min-width: 768px) {
    width: 160px;
    &:nth-child(3) {
      margin-right: 12px;
      margin-top: 0px;
    }
  } ;
`;

export const BtnWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;

export const FavoriteBtnImg = styled(HeartLogo)`
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;

export const DesktopWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-top: 32px;
  }
`;

export const StyledTelLink = styled.a`
  border: none;
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #f59256;
  border-radius: 40px;
  border: 2px solid #f59256;
  cursor: pointer;
  transition: all 200ms linear;
  text-decoration: none;

  margin-bottom: 12px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 12px;
    width: 160px;
  }

  &:hover,
  :focus {
    color: #111111;
    background-color: #fdf7f2;
  }
`;

export const RightContent = styled.div`
  margin-left: 40px;
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const StyledLink = styled.a`
  font-weight: 700;
  color: #f59256;
`;

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(17, 17, 17, 0.6)',
    zIndex: '2',
  },
  content: {
    padding: '0 20px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '280px',
    maxHeight: '100%',
    minHeight: '400px',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    overflowY: 'scroll',
  },
};
