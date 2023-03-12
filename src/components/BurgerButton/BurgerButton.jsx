import { StyledImg, StyledImgContainer } from './BurgerButton.styled';
import burger from '../../img/burger.png';

export default function BurgerButton({ onClick }) {
  return (
    <StyledImgContainer onClick={onClick}>
      <StyledImg src={burger} alt="burger button" />
    </StyledImgContainer>
  );
}
