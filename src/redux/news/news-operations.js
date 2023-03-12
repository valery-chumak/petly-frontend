import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchNews } from 'services/API/API';

export const getNews = createAsyncThunk(
  'news/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchNews();
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
