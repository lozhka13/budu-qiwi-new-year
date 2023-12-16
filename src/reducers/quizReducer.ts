import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questions from "../data/questions.json";

const initialState = {
  total: new Array(questions.length).fill(0),
  currentQuestion: 0,
  currentAleState: 2,
  currentAdvice: 0,
};

export const quizReducer = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    writeResult(state, actions: PayloadAction<Record<string, number>>) {
      state.total[actions.payload.index] = actions.payload.mark;
      state.currentQuestion = state.currentQuestion + 1;
    },
    setAleState(state, actions: PayloadAction<number>) {
      state.currentAleState = actions.payload;
    },
    setCurrentAdvice(state, actions: PayloadAction<number>) {
      state.currentAdvice = actions.payload;
    },
  },
});

export const { writeResult, setAleState, setCurrentAdvice } =
  quizReducer.actions;

export default quizReducer.reducer;
