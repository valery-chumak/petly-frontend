import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/authSelectors';
import {
  StyledContainer,
  StyledButton,
  StyledIconContainer,
  StyledIcon,
} from './UserNav.styled';

export default function UserNav({ onClick }) {
  const user = useSelector(selectUserData);

  if (user) {
    return (
      <StyledContainer>
        <StyledButton to="/user" onClick={onClick}>
          <StyledIconContainer>
            <StyledIcon />
          </StyledIconContainer>
          {user ? user.name : 'Account'}
        </StyledButton>
      </StyledContainer>
    );
  }
}
