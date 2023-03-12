import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainContainer } from '../../components/App.styled';

import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import {
  PageTitle,
  Section,
  ButtonsWrapper,
  ContainerWrapp,
  NotFoundText,
} from './NoticesPage.styled';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

import Loader from 'components/Loader/Loader';
import AddNoticeButton from 'components/AddNoticeButton/AddNoticeButton';
import ModalAddNotice from '../../components/ModalAddNotice/ModalAddNotice';
import { getNotices } from 'redux/notices/notices-operation';
import {
  getAllNotices,
  getLoading,
  getError,
} from 'redux/notices/notices-selectors';

import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { selectUserData, selectAccessToken } from 'redux/auth/authSelectors';

import { useParams } from 'react-router-dom';

function NoticesPage() {
  const token = useSelector(selectAccessToken);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { categoryName } = useParams();

  const notices = useSelector(getAllNotices);
  const { favorite } = useSelector(selectUserData) || [];
  const loading = useSelector(getLoading);

  const error = useSelector(getError);

  const [query, setQ] = useState('');
  const dispatch = useDispatch();
  let ref = useRef(false);

  useEffect(() => {
    ref.current = true;
    dispatch(getNotices({ categoryName, token }));
  }, [dispatch, categoryName, query, token]);

  useEffect(() => {
    if (categoryName === 'favorite') {
      dispatch(getNotices({ categoryName, token }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, favorite, token]);

  const filteredNotices = () => {
    const data = notices.filter(
      el =>
        el.title.toLowerCase().includes(query.toLowerCase()) ||
        el.breed.toLowerCase().includes(query.toLowerCase())
    );
    return data;
  };
  const noticesToLayout = filteredNotices();
  return (
    <MainContainer>
      <Section>
        <ContainerWrapp>
          <PageTitle>Find your favorite pet</PageTitle>
          <NoticesSearch setQ={setQ} />
          <ButtonsWrapper>
            <NoticesCategoriesNav></NoticesCategoriesNav>
            <AddNoticeButton onClickOpen={() => setIsAddModalOpen(true)} />
          </ButtonsWrapper>
          {loading && <Loader />}
          {error && <p>Something went wrong...</p>}
          {!loading && notices && (
            <NoticesCategoriesList
              notices={noticesToLayout}
              favorite={favorite}
            />
          )}

          {!loading && ref.current && !Boolean(noticesToLayout.length) && (
            <NotFoundText>Not found, try again.</NotFoundText>
          )}
        </ContainerWrapp>

        <ModalAddNotice
          isModalOpen={isAddModalOpen}
          setIsModalOpen={setIsAddModalOpen}
        ></ModalAddNotice>
      </Section>
    </MainContainer>
  );
}

export default NoticesPage;
