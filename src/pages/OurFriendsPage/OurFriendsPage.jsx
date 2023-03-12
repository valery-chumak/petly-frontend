import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FriendList } from '../../components/OurFriends/OurFriendList/OurFriendsList';
import { PageTitle, Container, Section } from './OurFriendsPage.styled';
import { MainContainer } from '../../components/App.styled';
import Loader from 'components/Loader/Loader';
import {
  getAllFriends,
  getLoading,
  getError,
} from 'redux/friends/friends-selectors';
import { getFriends } from 'redux/friends/friends_operations';
// import friends from '../../components/OurFriends/friends.json';

function OurFriendsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  const friends = useSelector(getAllFriends);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <Section>
      <MainContainer>
        <Container>
          <PageTitle>Our friends</PageTitle>
          {loading && <Loader />}
          {error && <p>Что-то пошло не так</p>}
          {!loading && friends && <FriendList friends={friends} />}
        </Container>
      </MainContainer>
    </Section>
  );
}

export default OurFriendsPage;
