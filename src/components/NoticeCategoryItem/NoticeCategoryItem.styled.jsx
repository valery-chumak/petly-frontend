import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  position: relative;
  background: ${props => props.theme.colors.white};
  border-radius: 0px 0px 20px 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  

  @media screen and (min-width: 768px) {
    width: 336px;

    border-radius: 0px 0px 40px 40px;
  }
  @media screen and (min-width: 1300px) {
    width: 288px;
  }
`;


export const LearnMoreBtn = styled.button`
  color: rgba(245, 146, 86, 1);
  background: ${props => props.theme.colors.white};
  border: 2px solid rgba(245, 146, 86, 1);
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: block;
  padding: 8px;
  width: 248px;
  margin-bottom: 12px;
  margin-right: auto;
  margin-left: auto;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
  }

  &:last-child {
    margin-bottom: 20px;
    margin-top: 50px;
  }

  &:first-child:not(:last-child) {
    margin-top: 20px;
  }

  &:hover {
    background: rgba(255, 97, 1, 1);
    color: ${props => props.theme.colors.white};
  }
`;

export const DeleteBtn = styled.button`
  border: 2px solid rgba(245, 146, 86, 1);
  color: rgba(245, 146, 86, 1);
  background: ${props => props.theme.colors.white};
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  width: 248px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
  }

  &:hover {
    background: rgba(255, 97, 1, 1);
    color: ${props => props.theme.colors.white};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const InfoWrapper = styled.div`
  flex: 1 0 0;
  padding: 20px;
  padding-bottom: 0;
`;


export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryTitle = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  width: 150px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  display: block;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const Span = styled.span`
  display: inline-block;
  margin-right: 37px;
  width: 50px;
`;

export const AddToFavoriteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  backdrop-filter: blur(2px);
  background-color: hsla(0, 0%, 100%, 0.6);
  border: none;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 50%;
  color: white;
  &.active,
  :hover {
    background: rgba(245, 146, 86, 1);
  }
  &:hover > svg {
    background: rgba(245, 146, 86, 1);
    fill: ${props => props.theme.colors.white};
  }
`;
export const FavoriteIcon = styled(AiFillHeart)`
  width: 28px;
  height: 28px;
  fill: #ff7301;
`;

export const AddIcon = styled(AiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: rgba(245, 146, 86, 1);
  :hover {
    background: rgba(245, 146, 86, 1);
  }
`;

export const Image = styled.img`
  height: 288px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
`;

export const DelIcon = styled(RiDeleteBin5Fill)`
  color: rgba(245, 146, 86, 1);
  width: 24px;
`;
