import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNext } from "../features/QuizSlice";
import "../styles/pages/quizScreen.scss";
const QuizScreen = () => {
  const { questionNumber } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const QuizData = [
    {
      question: " Ayo this is going to be a stupid Question",
      options: ["option1", "option2", "option3", "option4"],
      markedOptions: null,
    },
    {
      question: " Ayo this is second ",
      options: ["option1", "option2", "option3", "option4"],
      markedOptions: null,
    },
    {
      question: " Ayo this is third to d Question",
      options: ["option1", "option2", "option3", "option4"],
      markedOptions: null,
    },
    {
      question: " This is su",
      options: ["option1", "option2", "option3", "option4"],
      markedOptions: null,
    },
    {
      question: "This is nish",
      options: ["option1", "option2", "option3", "option4"],
      markedOptions: null,
    },
    {
      question: " quiz app",
      options: ["option1", "option2", "option3", "option4"],
      markedOptions: null,
    },
  ];

  return (
    <div className="QuizScreen-container">
      <motion.div layoutId="TakeQuizForm" className="QuizScreen-wrapper">
        <motion.div layoutId="continueToQuiz" className="question-wrapper">
          <h2>
            Q {questionNumber + 1}. {QuizData[questionNumber].question}
          </h2>
          <div className="answer_section">
            {QuizData[questionNumber].options.map((item) => (
              <div className="answer">
                <input type="radio" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="prev_next_btn">
            <button>Back</button>
            <button
              onClick={() => {
                dispatch(handleNext());
              }}
            >
              Next
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizScreen;
