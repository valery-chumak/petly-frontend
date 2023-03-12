import items from './AuthNavItems';
import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledButton,
} from './AuthNav.styled';

export default function AuthNav({ onClick }) {
  const elements = items.map(({ text, href }) => {
    return (
      <StyledItem key={text} onClick={onClick}>
        <StyledButton to={href}>{text}</StyledButton>
      </StyledItem>
    );
  });
  return (
    <StyledContainer>
      <StyledList>{elements}</StyledList>
    </StyledContainer>
  );
}
