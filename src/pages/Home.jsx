import React from 'react'
import '../styles/pages/home.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  return (
    <div className='home-container'>
      <div className="home-wrapper">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="home-btn"> <motion.span  layoutId='CreateQuizForm-header'>Create a Quiz</motion.span></motion.div>
        <span>or</span>
        <motion.div
          layoutId='TakeQuizForm'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={() => navigate('/TakeQuiz')}
          className="home-btn"><motion.span  layoutId='TakeQuizForm-header' layout='position'  >Take a Quiz</motion.span></motion.div>


      </div>
    </div>
  )
}

export default Home