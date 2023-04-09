import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNext } from "../features/QuizSlice";
import { handlePrev } from "../features/QuizSlice";
import "../styles/pages/quizScreen.scss";
const QuizScreen = () => {
  const { questionNumber } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const Data = [
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
  const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(-1)
  const [RightId, setRightId] = useState(1)

  const nextBtn = () => {
    setCenterId(val => val + 1)
    setLeftId(val => val + 1)
    setRightId(val => val + 1)
    setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    setCenterId(val => val - 1)
    setLeftId(val => val - 1)
    setRightId(val => val - 1)
  }

  const variants = {
    center: {
      x: '0rem',
      opacity: 1,
      scale: 1,
      zIndex: '5',
      filter: "brightness(100%)",

      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
      transition: {

        duration: 0.3,
      },
    },
    left: {
      x: '-105%',
      opacity: 0.5,

      scale: 0.9,



      transition: {

        duration: 0.3,
      },
    },
    right: {
      x: '105%',
      opacity: 0.5,

      scale: 0.9,


      transition: {
        duration: 0.3,
      },
    },
    rightHidden: {
      x: '110%',
      scale: 0.5,
      opacity: 0,
    },
    leftHidden: {
      x: '-110%',
      scale: 0.5,
      opacity: 0,
    },
  }
  return (
    <div className="QuizScreen-container">
      <motion.div layoutId="TakeQuizForm" className="QuizScreen-wrapper">
        <motion.div className="carousel-content">
          <AnimatePresence  >
            {!CenterId == 0 && <motion.div
              key={LeftId}
              variants={variants}
              initial={FlowDirection ? 'center' : 'leftHidden'}
              animate="left"
              exit={'leftHidden'}
              className="question-wrapper"
            >
              <h2>
                Q {LeftId}. {Data[LeftId].question}
              </h2>
              <div className="answer_section">
                {Data[LeftId].options.map((item, index) => (
                  <div key={index} className="answer">
                    <input type="radio" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>}
            <motion.div
              variants={variants}
              key={CenterId}
              initial={FlowDirection ? 'right' : 'left'}
              animate="center"
              className="question-wrapper"
            >
              <h2>
                Q {CenterId + 1}. {Data[CenterId].question}
              </h2>
              <div className="answer_section">
                {Data[CenterId].options.map((item, index) => (
                  <div key={index} className="answer">
                    <input type="radio" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            {CenterId < Data.length - 1 && <motion.div
              key={RightId}
              variants={variants}
              initial={FlowDirection ? 'rightHidden' : 'center'}
              animate="right"
              exit={'rightHidden'}
              className="question-wrapper"
            >
              <h2>
                Q {RightId + 1}. {Data[RightId].question}
              </h2>
              <div className="answer_section">
                {Data[RightId].options.map((item, index) => (
                  <div key={index} className="answer">
                    <input type="radio" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>}
          </AnimatePresence>
        </motion.div>


        <div className="prev_next_btn">
          <button
            onClick={() => {
              // dispatch(handlePrev());
              prevBtn()

            }}
            disabled={CenterId === 0}
          >
            Back
          </button>
          <button
            onClick={() => {
              // dispatch(handleNext());
              nextBtn()
            }}
            disabled={CenterId === Data.length - 1}

          >
            Next
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default QuizScreen;
