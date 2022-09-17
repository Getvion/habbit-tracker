import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habbitsList: [
    { title: 'habbit1', content: 'text' },
    { title: 'habbit2', content: 'text' },
    { title: 'habbit3', content: 'text' },
    { title: 'habbit4', content: 'text' },
    { title: 'habbit5', content: 'text' },
    { title: 'habbit6', content: 'text' },
    { title: 'habbit7', content: 'text' },
    { title: 'habbit8', content: 'text' },
    { title: 'habbit9', content: 'text' }
  ]
};

const habbitsSlice = createSlice({
  name: 'habbits-slice',
  initialState,
  reducers: {}
});

export const habbitsReducer = habbitsSlice.reducer;
