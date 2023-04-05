import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionNumber: 0,
};

const QuizSlice = createSlice({
  name: "kfinSlice",
  initialState,
  reducers: {
    handleNext: (state, action) => {
      if (state.questionNumber < 5) {
        state.questionNumber++;
      }
    },
    handlePrev: (state, action) => {
      if (state.questionNumber) {
        state.questionNumber--;
      }
    },
  },
});
export const { handleNext, handlePrev } = QuizSlice.actions;
export default QuizSlice.reducer;
