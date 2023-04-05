import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionNumber: 0,
};

const QuizSlice = createSlice({
  name: "kfinSlice",
  initialState,
  reducers: {
    handleNext: (state, action) => {
      state.questionNumber++;
    },
  },
});
export const { handleNext } = QuizSlice.actions;
export default QuizSlice.reducer;
