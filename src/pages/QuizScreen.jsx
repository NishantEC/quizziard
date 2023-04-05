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
  const [LeftId, setLeftId] = useState(Data.length - 1)
  const [RightId, setRightId] = useState(1)

  const nextBtn = () => {
    if (LeftId === Data.length - 1) {
      setLeftId(0)
    } else {
      setLeftId(LeftId + 1)
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0)
    } else {
      setCenterId(CenterId + 1)
    }

    if (RightId === Data.length - 1) {
      setRightId(0)
    } else {
      setRightId(RightId + 1)
    }
    setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    if (LeftId === 0) {
      setLeftId(Data.length - 1)
    } else {
      setLeftId(LeftId - 1)
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1)
    } else {
      setCenterId(CenterId - 1)
    }
    if (RightId === 0) {
      setRightId(Data.length - 1)
    } else {
      setRightId(RightId - 1)
    }
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
        type: 'spring',
        duration: 1,
      },
    },
    left: {
      x: '-105%',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 0.9,

      zIndex: '4',
      boxShadow: 'unset',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    right: {
      x: '105%',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 0.9,
      boxShadow: 'unset',
      zIndex: '3',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    rightHidden: {
      x: '120%',
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: '-120%',
      scale: 0,
      opacity: 0,
    },
  }
  return (
    <div className="QuizScreen-container">
      <motion.div layoutId="TakeQuizForm" className="QuizScreen-wrapper">
        <motion.div className="carousel-content">
          <AnimatePresence initial={false}>
            <motion.div
              key={LeftId}
              variants={variants}
              initial={FlowDirection ? 'center' : 'leftHidden'}
              animate="left"
              exit={'leftHidden'}
              className="question-wrapper"
            >
               <h2>
            Q {CenterId }. {Data[CenterId].question}
          </h2>
          <div className="answer_section">
            {Data[CenterId].options.map((item) => (
              <div className="answer">
                <input type="radio" />
                <p>{item}</p>
              </div>
            ))}
          </div>
            </motion.div>
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
            {Data[questionNumber].options.map((item) => (
              <div className="answer">
                <input type="radio" />
                <p>{item}</p>
              </div>
            ))}
          </div>
            </motion.div>
            <motion.div
              key={RightId}
              variants={variants}
              initial={FlowDirection ? 'rightHidden' : 'center'}
              animate="right"
              exit={'rightHidden'}
              className="question-wrapper"
            >
              <h2>
            Q {CenterId + 2}. {Data[CenterId+1].question}
          </h2>
          <div className="answer_section">
            {Data[CenterId+1].options.map((item) => (
              <div className="answer">
                <input type="radio" />
                <p>{item}</p>
              </div>
            ))}
          </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* <motion.div key={questionNumber} layoutId="continueToQuiz" className="question-wrapper">
          
        </motion.div> */}
        <div className="prev_next_btn">
          <button
            onClick={() => {
              // dispatch(handlePrev());
              prevBtn()
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              // dispatch(handleNext());
              nextBtn()
            }}
          >
            Next
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default QuizScreen;
