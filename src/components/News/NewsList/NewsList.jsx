import PropTypes from 'prop-types';

import { List } from './NewsList.styled';

import NewsItem from '../NewsItem';

function NewsList({ data = [] }) {
  const elements = data.map(({ _id, date, text, title, url }) => (
    <NewsItem key={_id} date={date} text={text} title={title} url={url} />
  ));

  return <List>{elements}</List>;
}

export default NewsList;

NewsList.defaultProps = {
  data: [],
};

NewsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
