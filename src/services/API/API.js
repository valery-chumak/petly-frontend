import axios from 'axios';
// import { selectAccessToken } from 'redux/auth/authSelectors';

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};
export const instance = axios.create({
  baseURL: 'https://petly-backend.onrender.com/api',
  // baseURL: 'http://localhost:4000/api',
});

export const fetchNews = async () => {
  const { data } = await instance.get('/news');
  return data;
};

export const fetchFriends = async () => {
  const { data } = await instance.get('/friends');
  return data;
};

export const fetchUserData = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const updateUserData = async (values, config) => {
  const { data } = await instance.put('/auth/update', values, config);

  return data;
};

export const registerUser = async credentials => {
  const { data } = await instance.post('/auth/register', credentials);
  // setAuthHeader(data.token);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await instance.post('/auth/login', credentials);
  // setAuthHeader(data.token);
  return data;
};

export const logoutUser = async credentials => {
  const { data } = await instance.post('/auth/logout', credentials);
  // clearAuthHeader(selectAccessToken);
  // console.log(data);
  return data;
};

export const fetchNotices = async () => {
  const { data } = await instance.get('/notices/category/sell');
  return data;
};
// під питанням

export const fetchNoticeById = async id => {
  const { data } = await instance.get(`/notices/notice/${id}`);
  return data;
};

export const addNotice = async (values, config) => {
  const { data } = await instance.post('/notices/notice', values, config);
  return data;
};

export const fetchPetsAdd = async (credentials, config) => {
  const { data } = await instance.post('/pets', credentials, config);
  return data;
};

export const fetchPetsDelete = async id => {
  const data = await instance.delete(`/pets/${id}`);
  return data;
};

export const fetchRemoveNotice = async id => {
  const { data } = await instance.delete(`/notices/notice/${id}`, id);
  return data;
};

export const fetchAddToFavorite = async id => {
  const { data } = await instance.post(`/notices/favorite/${id}`, id);
  return data;
};

export const fetchRemoveWithFavorite = async id => {
  const { data } = await instance.delete(`/notices/favorite/${id}`, id);
  return data;
};

export const fetchGetUserFavorite = async () => {
  const { data } = await instance.get('/notices/favorite');
  return data;
};

export const fetchGetUserNotices = async () => {
  const { data } = await instance.get('/notices/current');
  return data;
};
