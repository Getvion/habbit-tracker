import { createHabbitPopupReducer } from '@features/reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    createHabbitPopup: createHabbitPopupReducer
  }
});
