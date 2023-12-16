import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questions from "../data/questions.json";

const initialState = {
  total: new Array(questions.length).fill(0),
  currentQuestion: 0,
};

export const markReducer = createSlice({
  name: "mark",
  initialState,
  reducers: {
    writeResult(state, actions: PayloadAction<Record<string, number>>) {
      // console.log("actions.payload", actions.payload);
      state.total[actions.payload.index] = actions.payload.mark;
    },
    setCurrentQuestion(state, actions: PayloadAction<number>) {
      state.currentQuestion = actions.payload;
    },
  },
});

export const { writeResult, setCurrentQuestion } = markReducer.actions;

export default markReducer.reducer;
