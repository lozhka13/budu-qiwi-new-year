import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isHome: false,
};

export const headerReducer = createSlice({
  name: "header",
  initialState,
  reducers: {
    setPageType(state, actions: PayloadAction<boolean>) {
      state.isHome = actions.payload;
    },
  },
});

export const { setPageType } = headerReducer.actions;

export default headerReducer.reducer;
