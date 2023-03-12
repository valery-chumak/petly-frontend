import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchFriends } from 'services/API/API';

export const getFriends = createAsyncThunk(
  'friends/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchFriends();
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
