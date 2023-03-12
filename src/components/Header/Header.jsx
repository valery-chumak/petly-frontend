import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import { StyledHeader, StyledMenuContainer } from './Header.styled';
import { MainContainer } from '../App.styled';

import Logo from 'components/Logo/Logo';
import BurgerButton from 'components/BurgerButton/BurgerButton';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Nav from 'components/Nav/Nav';

export default function Header() {
  const [showBurgerMenu, setShowBurgetMenu] = useState(false);
  const isLogined = useSelector(selectIsLoggedIn);

  const isDesktop = useMediaQuery({ minWidth: 1300 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const toggleBurgerMenu = () => {
    setShowBurgetMenu(state => !state);
  };

  const onClose = () => {
    setShowBurgetMenu(false);
  };

  return (
    <MainContainer>
      <StyledHeader>
        <Logo />
        {isDesktop && <Nav />}

        {isTablet && (
          <StyledMenuContainer>
            {isLogined ? (
              <UserNav onClick={onClose} />
            ) : (
              <AuthNav onClick={onClose} />
            )}
          </StyledMenuContainer>
        )}

        {!isDesktop && <BurgerButton onClick={toggleBurgerMenu} />}
      </StyledHeader>

      {!isDesktop && showBurgerMenu && (
        <BurgerMenu onClick={toggleBurgerMenu} isLogined={isLogined} />
      )}
    </MainContainer>
  );
}
