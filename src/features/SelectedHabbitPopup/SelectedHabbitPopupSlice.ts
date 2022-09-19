import { IStore } from 'types/interfaces';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habbitData: {},
  isOpen: false
};

const selectedHabbitPopupSlice = createSlice({
  name: 'selected-habbit-popup',
  initialState,
  reducers: {
    setSelectedHabbitPopupOpen: (state) => {
      state.isOpen = true;
    },
    setSelectedHabbitPopupClose: (state) => {
      state.isOpen = false;
    },
    setSelectedHabbitPopupData: (state, action) => {
      state.isOpen = false;
      state.habbitData = action.payload;
    }
  }
});

export const selectedHabbitPopupReducer = selectedHabbitPopupSlice.reducer;

export const {
  setSelectedHabbitPopupClose,
  setSelectedHabbitPopupOpen,
  setSelectedHabbitPopupData
} = selectedHabbitPopupSlice.actions;

export const selectSelectedHabbitPopup = (state: IStore) => state.selectedHabbitPopup;
