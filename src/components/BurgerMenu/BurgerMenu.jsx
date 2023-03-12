import { useMediaQuery } from 'react-responsive';

import {
  StyledContainer,
  StyledHeader,
  StyledUserMenu,
  StyledContainerUserMenu,
} from './BurgerMenu.styled';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';

import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import CloseBurgerMenuBtn from 'components/CloseBurgerMenuBtn/CloseBurgerMenuBtn';

export default function BurgerMenu({ isLogined, onClick }) {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <StyledContainer>
      <StyledHeader>
        <Logo /> <CloseBurgerMenuBtn onClick={onClick} />
      </StyledHeader>

      <StyledContainerUserMenu>
        {!isTablet && (
          <StyledUserMenu>
            {isLogined ? (
              <UserNav onClick={onClick} />
            ) : (
              <AuthNav onClick={onClick} />
            )}
          </StyledUserMenu>
        )}

        <Nav onClick={onClick} />
      </StyledContainerUserMenu>
    </StyledContainer>
  );
}
