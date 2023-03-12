import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
  getUser,
  addNoticeToFavorite,
  removeNoticeWithFavorite,
  updateUser,
  deletePet,
  addPet,
} from './authOperations';

const initialState = {
  user: null,
  accessToken: null,
  isRefreshing: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    // start Registration
    builder.addCase(register.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      // state.user = payload.user;
      state.accessToken = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    // end Registration
    builder.addCase(login.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.accessToken = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    //logout User
    builder.addCase(logout.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = null;
      state.accessToken = null;
      // state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    builder.addCase(logout.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
      state.error = '';
      state.isLoading = true;
    });

    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = '';
    });

    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
      state.isLoading = false;
    });
    builder.addCase(updateUser.pending, state => {
      state.isRefreshing = true;
      state.error = '';
      state.isLoading = true;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = '';
    });

    builder.addCase(updateUser.rejected, state => {
      state.isRefreshing = false;
      state.isLoading = false;
    });

    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
    });

    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(addNoticeToFavorite.fulfilled, (state, { payload }) => {
      state.user.favorite.push(payload);
    });

    builder.addCase(addNoticeToFavorite.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(
      removeNoticeWithFavorite.fulfilled,
      (state, { payload }) => {
        const newList = state.user.favorite.filter(id => id !== payload);

        state.user.favorite = newList;
      }
    );
    builder.addCase(removeNoticeWithFavorite.rejected, (state, { payload }) => {
      state.error = payload;
    });

    //add pet
    builder.addCase(addPet.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addPet.fulfilled, (state, { payload }) => {
      state.user.pets.push(payload);
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(addPet.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(deletePet.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.user.pets = state.user.pets.filter(pet => pet._id !== payload);
    });
  },
});

export default authSlice.reducer;
