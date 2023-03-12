import { UserData } from 'components/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PetsData from 'components/PetsData/PetsData';

import {
  UserContainer,
  UserWrapper,
  PetsWrapper,
  UserTitle,
} from './UserPage.styled';

import { MainContainer } from '../../components/App.styled';
import {
  selectIsLoggedIn,
  selectUserData,
} from '../../redux/auth/authSelectors';
import { getUser } from 'redux/auth/authOperations';

const UserPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserData);

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  return (
    <section>
      {user && isLogin && (
        <MainContainer>
          <UserContainer>
            <UserWrapper>
              <UserTitle>My information:</UserTitle>
              <UserData user={user} />
            </UserWrapper>
            <PetsWrapper>
              <PetsData />
            </PetsWrapper>
          </UserContainer>
        </MainContainer>
      )}
    </section>
  );
};

export default UserPage;
