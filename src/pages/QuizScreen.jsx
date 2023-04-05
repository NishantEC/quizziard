import { motion } from 'framer-motion'
import React from 'react'
import '../styles/pages/quizScreen.scss'
const QuizScreen = () => {

  return (
    <div className='QuizScreen-container'>
    <motion.div layoutId='TakeQuizForm' className="QuizScreen-wrapper">
    <motion.div layoutId='continueToQuiz' className='question-wrapper'  >

    </motion.div>
    </motion.div>
  </div>
  )
}

export default QuizScreen