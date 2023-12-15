import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  total: -1,
};

export const markReducer = createSlice({
  name: "mark",
  initialState,
  reducers: {
    addToTotal(state, actions: PayloadAction<number>) {
      if (state.total === -1) {
        state.total = actions.payload;
      } else {
        state.total += actions.payload;
      }
    },
  },
});

export const { addToTotal } = markReducer.actions;

export default markReducer.reducer;
