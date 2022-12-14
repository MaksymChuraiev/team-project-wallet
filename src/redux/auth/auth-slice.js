import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operation';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRegister: false,
  isLoggedIn: false,
  isFetching: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isRegister = true;
      state.isError = false;
    },
    [authOperations.register.pending](state) {
      state.isRegister = false;
      state.isError = false;
    },
    [authOperations.register.rejected](state) {
      state.isRegister = false;
      state.isError = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = false;
      state.isFetching = false;
    },
    [authOperations.logIn.pending](state) {
      state.isLoggedIn = false;
      state.isFetching = true;
      state.isError = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.isError = true;
      state.isFetching = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.currentUser.pending](state) {
      state.isFetching = true;
    },
    [authOperations.currentUser.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [authOperations.currentUser.rejected](state) {
      state.isFetching = false;
    },
  },
});

export default authSlice.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const getIsLoggedIn = state => state.auth.isLoggedIn;