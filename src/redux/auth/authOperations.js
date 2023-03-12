import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  loginUser,
  registerUser,
  logoutUser,
  setAuthHeader,
  fetchUserData,
  clearAuthHeader,
  fetchRemoveWithFavorite,
  fetchAddToFavorite,
  updateUserData,
  fetchPetsDelete,
  fetchPetsAdd,
} from 'services/API/API';

// Регистрация
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await registerUser(credentials);

      setAuthHeader(data.token);

      toast.success('Congratulations! Your account is created.');

      return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };

      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
// Логінізація
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials);

      setAuthHeader(data.token);

      return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };

      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logoutUser();

      clearAuthHeader();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);

      const data = await fetchUserData();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'users/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserData();

      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ value, token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      await updateUserData(value, config);
      const data = await fetchUserData();

      return data;
    } catch (error) {
      toast.error(error.message);
      throw rejectWithValue(error);
    }
  }
);

export const addNoticeToFavorite = createAsyncThunk(
  'auth/addToFavorite',
  async (id, { rejectWithValue }) => {
    try {
      await fetchAddToFavorite(id);

      return id;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const removeNoticeWithFavorite = createAsyncThunk(
  'auth/removeWithFavorite',
  async (id, { rejectWithValue }) => {
    try {
      await fetchRemoveWithFavorite(id);

      return id;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

//addPets
export const addPet = createAsyncThunk(
  'auth/addPet',
  async ({ dataForm, token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      const res = await fetchPetsAdd(dataForm, config);
      toast.success('Congratulations! You have added your pet');
      return res;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

//удаление питомца
export const deletePet = createAsyncThunk(
  'users/deletePet',
  async (id, { rejectWithValue }) => {
    try {
      await fetchPetsDelete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
