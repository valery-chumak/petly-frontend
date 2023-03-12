import {
  Item,
  Line,
  Title,
  Description,
  Wrapper,
  Date,
  Link,
} from './NewsItem.styled';

function NewsItem({ text, date, title, url }) {
  return (
    <Item>
      <Line> </Line>
      <Title>{title}</Title>
      <Description>{text}</Description>
      <Wrapper>
        <Date>{date.split('-').reverse().join('/')}</Date>
        <Link href={url} target="_blank">
          Read more
        </Link>
      </Wrapper>
    </Item>
  );
}

export default NewsItem;
