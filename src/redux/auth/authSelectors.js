export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoading = state => state.auth.isLoading;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;

export const selectUserData = state => state.auth.user;

export const selectAccessToken = state => state.auth.accessToken;

export const getAllUserData = state => state.user.data; // ?

export const selectUserPets = state => state.auth.user.pets;

// export const selectRefreshToken = state => state.auth.refreshToken;
