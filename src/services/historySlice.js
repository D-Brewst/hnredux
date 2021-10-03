import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addTerm(state, action) {
      state.push(action)
    },
  },
})

export const { addTerm } = historySlice.actions;
export default historySlice.reducer;