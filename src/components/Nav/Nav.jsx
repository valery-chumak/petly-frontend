import {
  StyledNavContainer,
  StyledNavList,
  StyledNavItem,
  StyledLink,
} from './Nav.styled';
import NavItems from './NavItems';

export default function Nav({ onClick }) {
  const elements = NavItems.map(({ text, href }) => {
    return (
      <StyledNavItem key={text} onClick={onClick}>
        <StyledLink to={href}>{text}</StyledLink>
      </StyledNavItem>
    );
  });

  return (
    <StyledNavContainer>
      <StyledNavList>{elements}</StyledNavList>
    </StyledNavContainer>
  );
}
