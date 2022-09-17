import { createHabbitPopupReducer, habbitsReducer } from '@features/reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    createHabbitPopup: createHabbitPopupReducer,
    habbits: habbitsReducer
  }
});
