import { IStore } from 'types/interfaces';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  habbitData: { title: '', content: '' }
};

const createHabbitPopupSlice = createSlice({
  name: 'create-habbit-popup',
  initialState,
  reducers: {
    setPopupOpen: (state) => {
      state.isOpen = true;
    },
    setPopupClose: (state) => {
      state.isOpen = false;
    },
    setHabbitData: (state, action) => {
      state.isOpen = false;
      state.habbitData = action.payload;
    }
  }
});

export const createHabbitPopupReducer = createHabbitPopupSlice.reducer;

export const { setPopupClose, setPopupOpen, setHabbitData } = createHabbitPopupSlice.actions;

export const selectCreateHabbitPopup = (state: IStore) => state.createHabbitPopup;
