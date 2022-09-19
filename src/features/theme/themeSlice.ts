import { IStore } from 'types/interfaces';

import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    setTheme: (state, action) => action.payload
  }
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

export const selectTheme = (state: IStore) => state.theme;
