import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { Section, Container, Title } from './NewsPage.styled';
import { MainContainer } from '../../components/App.styled';

import NewsList from 'components/News/NewsList';
import NewsSearchForm from 'components/News/NewsSearchForm';

import { getAllNews, getLoading, getError } from 'redux/news/news-selectors';
import { getNews } from 'redux/news/news-operations';

// const spinnerStyles = {
//   marginTop: '20px',
// };

function NewsPage() {
  const [q, setQ] = useState('');
  const dispatch = useDispatch();
  let ref = useRef(false);

  useEffect(() => {
    ref.current = true;
    dispatch(getNews());
  }, [dispatch]);

  const news = useSelector(getAllNews);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const filteredNews = () => {
    const data = news.filter(
      el =>
        el.title.toLowerCase().includes(q.toLowerCase()) ||
        el.text.toLowerCase().includes(q.toLowerCase())
    );
    return data;
  };

  const newsToLayout = filteredNews();

  return (
    <Section>
      <MainContainer>
        <Container>
          <Title>News</Title>
          <NewsSearchForm setQ={setQ} />
          {loading && <Loader />}
          {error && <p>Something went wrong...</p>}
          {!loading && news && <NewsList data={newsToLayout} />}
          {!loading && ref.current && !Boolean(newsToLayout.length) && (
            <p>Not found</p>
          )}
        </Container>
      </MainContainer>
    </Section>
  );
}

export default NewsPage;
