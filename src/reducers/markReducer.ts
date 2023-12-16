import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questions from "../data/questions.json";

const initialState = {
  total: new Array(questions.length).fill(0),
};

export const markReducer = createSlice({
  name: "mark",
  initialState,
  reducers: {
    writeResult(state, actions: PayloadAction<Record<string, number>>) {
      // console.log("actions.payload", actions.payload);
      state.total[actions.payload.index] = actions.payload.mark;
    },
  },
});

export const { writeResult } = markReducer.actions;

export default markReducer.reducer;
