import { StyledImg, StyledImgContainer } from './Logo.styled';
import logo from '../../img/petly.png';

export default function Logo() {
  return (
    <StyledImgContainer>
      <StyledImg src={logo} alt="logo" />
    </StyledImgContainer>
  );
}
