// todo переделать регистрацию

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authService } from './authSevice';

// Get user from localStorage
const localUser = localStorage.getItem('user');
const user = localUser ? JSON.parse(localUser) : '';

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Register user
export const register = createAsyncThunk('auth/register', async (userData) =>
  authService.register(userData)
);

// Login user
export const login = createAsyncThunk('auth/login', async (userData) =>
  authService.login(userData)
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = 'Произошла ошибка';
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = 'Произошла ошибка';
        state.user = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  }
});

export const authReducer = authSlice.reducer;

export const { reset } = authSlice.actions;
