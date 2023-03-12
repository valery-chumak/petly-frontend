// import { createSlice } from '@reduxjs/toolkit';
// import { deletePet } from './petOperations';
// import { addPet } from './petOperations';

// const initialState = {
//   pets: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = store => {
//   store.isLoading = true;
// };

// const handleReject = (store, { playload }) => {
//   store.isLoading = false;
//   store.error = playload;
// };

// const petsSlise = createSlice({
//   name: 'pets',
//   initialState,
//   extraReducers: {
//     [addPet.pending]: handlePending,
//     [deletePet.pending]: handlePending,

//     [addPet.fulfilled]: (store, { playload }) => ({
//       ...store,
//       pets: playload,
//       isLoading: false,
//     }),
//     [deletePet.fulfilled]: (store, { playload }) => {
//       store.isLoading = false;
//       store.error = null;
//       const index = store.items.findIndex(task => task.id === playload);
//       store.items.splice(index, 1, playload);
//     },

//     [addPet.rejected]: handleReject,
//     [deletePet.rejected]: handleReject,
//   },
// });

// export default petsSlise.reducer;
