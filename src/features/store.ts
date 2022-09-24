import {
  authReducer,
  createHabbitPopupReducer,
  habbitsReducer,
  selectedHabbitPopupReducer,
  themeReducer
} from '@features/reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    createHabbitPopup: createHabbitPopupReducer,
    selectedHabbitPopup: selectedHabbitPopupReducer,
    habbits: habbitsReducer,
    theme: themeReducer
  }
});
