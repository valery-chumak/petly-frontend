import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './news-operations';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: {
    [getNews.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [getNews.fulfilled]: (store, { payload }) => ({
      ...store,
      data: payload,
      loading: false,
    }),

    [getNews.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default newsSlice.reducer;
