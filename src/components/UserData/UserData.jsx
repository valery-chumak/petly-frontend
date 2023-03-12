import PropTypes from 'prop-types';
import { useState } from 'react';

import UserDataItem from '../UserDataItem/UserDataItem';
import noAvatar from '../../img/no-image.jpeg';
import logoutIcon from '../../img/logout-icon.png';

import {
  EditImageBtn,
  EditImageIcon,
  ImageContainer,
  InputFile,
  InputWrapper,
  StyledImage,
  Wrapper,
  ImageWrapper,
  LogoutBtn,
  LogoutIcon,
  UserItemWrapper,
} from './UserData.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUser } from 'redux/auth/authOperations';
import { selectAccessToken } from 'redux/auth/authSelectors';

export const UserData = ({ user }) => {
  const dispatch = useDispatch();
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  const token = useSelector(selectAccessToken);

  const {
    email,
    name,
    birthdate: birthday,
    phone,
    location: city,
    avatar,
  } = user;

  const handleFileChange = async e => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const value = { avatar: imgFile };
      await dispatch(updateUser({ value, token }));
    }
  };

  return (
    <Wrapper>
      <ImageContainer>
        <ImageWrapper>
          <StyledImage
            alt="user-photo"
            src={avatar === null ? noAvatar : avatar}
          />
        </ImageWrapper>
        <InputWrapper>
          <InputFile type="file" onChange={handleFileChange} />
          <EditImageBtn>
            <EditImageIcon />
            <span>Edit photo</span>
          </EditImageBtn>
        </InputWrapper>
      </ImageContainer>
      <UserItemWrapper>
        <UserDataItem
          setIsDisabledBtn={setIsDisabledBtn}
          isDisabledBtn={isDisabledBtn}
          field="name"
          initValue={{ name }}
          setUser={async value => {
            if (value.name === name) {
              return;
            }
            await dispatch(updateUser({ value, token }));
          }}
        ></UserDataItem>
        <UserDataItem
          setIsDisabledBtn={setIsDisabledBtn}
          isDisabledBtn={isDisabledBtn}
          field="email"
          initValue={{ email }}
          setUser={async value => {
            if (value.email === email) {
              return;
            }
            await dispatch(updateUser({ value, token }));
          }}
        ></UserDataItem>
        <UserDataItem
          setIsDisabledBtn={setIsDisabledBtn}
          isDisabledBtn={isDisabledBtn}
          field="birthday"
          initValue={{
            birthday:
              birthday === null ? '00.00.0000' : getBirthdayString(birthday),
          }}
          setUser={async value => {
            if (value.birthdate === birthday) {
              return;
            }
            await dispatch(updateUser({ value, token }));
          }}
        ></UserDataItem>
        <UserDataItem
          setIsDisabledBtn={setIsDisabledBtn}
          isDisabledBtn={isDisabledBtn}
          field="phone"
          initValue={{ phone }}
          setUser={async value => {
            if (value.phone === phone) {
              return;
            }
            await dispatch(updateUser({ value, token }));
          }}
        ></UserDataItem>
        <UserDataItem
          setIsDisabledBtn={setIsDisabledBtn}
          isDisabledBtn={isDisabledBtn}
          field="city"
          initValue={{ city }}
          setUser={async value => {
            if (value.location === city) {
              return;
            }
            await dispatch(updateUser({ value, token }));
          }}
        ></UserDataItem>
        <LogoutBtn onClick={async () => await dispatch(logout())}>
          <LogoutIcon alt="logout user" src={logoutIcon} /> Log Out
        </LogoutBtn>
      </UserItemWrapper>
    </Wrapper>
  );
};

UserData.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      birthdate: PropTypes.string,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

function getBirthdayString(ISOdate) {
  const date = new Date(ISOdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${date.getFullYear()}`;
}
