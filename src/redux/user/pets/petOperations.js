// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchPets } from 'services/API/API';
// import { fetchPetsDelete } from 'services/API/API';

// //добавления питомца
// export const addPet = createAsyncThunk(
//   'pets/addPet',
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await fetchPets(data);
//       return res.user.pets;
//     } catch ({ response }) {
//       const error = {
//         status: response.status,
//         message: response.data.message,
//       };
//       return rejectWithValue(error.message);
//     }
//   }
// );

// //delete Pet
// export const deletePet = id => {
//   createAsyncThunk('pets/deletePet', async (_, { rejectWithValue }) => {
//     try {
//       const response = fetchPetsDelete(id);
//       return response.data;
//     } catch (error) {
//       throw rejectWithValue(error.message);
//     }
//   });
// };
