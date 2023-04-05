import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from "./features/QuizSlice";
export default configureStore({
  reducer: {
    quiz: QuizReducer,
  },
});
