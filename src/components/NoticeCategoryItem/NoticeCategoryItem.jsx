import { useState } from 'react';
import { toast } from 'react-toastify';
import numWords from 'num-words';
import noImage from '../../img/noImage.png';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  addNoticeToFavorite,
  removeNoticeWithFavorite,
} from 'redux/auth/authOperations';
import { removeNotice } from 'redux/notices/notices-operation';
import { selectUserData } from 'redux/auth/authSelectors';


import ModalNotice from 'components/ModalNotice/ModalNotice';

import {
  Item,
  LearnMoreBtn,
  Title,
  Text,
  InfoWrapper,
  CategoryTitle,
  AddToFavoriteBtn,
  Span,
  AddIcon,
  Image,
  DeleteBtn,
  DelIcon,
  FavoriteIcon,
  BtnWrapper,
} from './NoticeCategoryItem.styled';


function NoticeCategoryItem(notices) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const userId = user?._id || null;

  const {
    _id,
    title,
    birthdate,
    breed,
    location,
    avatar,
    price,
    favorite,
    owner,
    category,
  } = notices;
  const { url } = avatar;
  
  
  let isFavorite = favorite?.includes(_id) || false;
  let isDisplayed = false;

  if (owner === userId) {
    isDisplayed = true;
  }

  function getAge() {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;

      const ageWords = numWords(age);

      return ageWords;
    }
  }

  function changeCategory() {
    if (category === 'ingoodhands') {
      return 'in good hands';
    }
    if (category === 'lostfound') {
      return 'lost/found';
    } else {
      return category;
    }
  }
  
  const onClickFavoriteButton = () => {
     if (!isLoggedIn) {
       return toast.error(
         'You need to authorize before adding notices to favorite.');
     }

    else if (!isFavorite) {
      dispatch(addNoticeToFavorite(_id));
    } else {
      dispatch(removeNoticeWithFavorite(_id));
    }
  };

  const onClickDeleteButton = () => {
    dispatch(removeNotice(_id));
  };

  return (
    <>
      <Item key={_id}>
        <Image src={url ?? noImage} alt="pet" minwidth={288} height={288} />
        <CategoryTitle>{changeCategory()}</CategoryTitle>
        <AddToFavoriteBtn onClick={onClickFavoriteButton}>
          {isFavorite ? <FavoriteIcon /> : <AddIcon />}
        </AddToFavoriteBtn>
        <InfoWrapper>
          <Title>{title}</Title>
          <Text>
            <Span>Breed:</Span>
            {breed}
          </Text>
          <Text>
            <Span>Place:</Span>
            {location}
          </Text>
          <Text>
            <Span>Age:</Span>
            {getAge()} {getAge() === 'one' ? 'year' : 'years'}
          </Text>
          {category === 'sell' && (
            <Text>
              <Span>Price:</Span>
              {price ? `${price} $` : '--------'}
            </Text>
          )}
        </InfoWrapper>
        <BtnWrapper>
          <LearnMoreBtn onClick={() => setIsModalOpen(true)}>
            Learn more
          </LearnMoreBtn>

          <DeleteBtn
            onClick={onClickDeleteButton}
            style={isDisplayed ? {} : { display: 'none' }}
          >
            Delete
            <DelIcon />
          </DeleteBtn>
        </BtnWrapper>
        {isModalOpen && (
          <ModalNotice
            id={_id}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClickDelete={onClickDeleteButton}
            addToFavorite={onClickFavoriteButton}
            isFavorite={isFavorite}
          />
        )}
      </Item>
    </>
  );
}

export default NoticeCategoryItem;
