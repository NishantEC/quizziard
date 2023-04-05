import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import '../styles/pages/takeQuizForm.scss'
import { useNavigate } from 'react-router-dom'
const TakeQuizForm = () => {
  const navigate = useNavigate()
const firstNameRef = useRef(null)
  const HandleContinue= ()=>{
    navigate('/Quiz')
  }
  return (
    <div className='TakeQuizForm-container'>
      <motion.div layoutId='TakeQuizForm' className="TakeQuizForm-wrapper">
        <motion.span className='TakeQuiz-Heading' layoutId='TakeQuizForm-header'>Take a Quiz</motion.span>
        <div className="TakeQuizForm-content">
          <div className="candidate-name">
            <span>
              <label htmlFor="first-name">First Name</label>
              <input ref={firstNameRef} type="text" placeholder='John' />
            </span>
            <span>
              <label htmlFor="Last-name" >Last Name</label>
              <input type="text" placeholder='Doe' />
            </span>
          </div>
          <div className="Phone-Number">
            <span>
              <label htmlFor="Phone-Number">Phone Number</label>
              <span>              <input type="text" placeholder='+91' disabled />
                <input type="text" placeholder='9876543210' /></span>
            </span>
          </div>
          <div className="candidate-name">
            <span>
              <label htmlFor="email-address">Email Address</label>
              <input type="text" placeholder='JohnDoe@email.com' />
            </span>
          </div>
          <div className="Quiz-Code">
            <span>
              <label htmlFor="Quiz-Code">Quiz Code</label>
              <span>          <input type="text" />
                <input type="text" />
                <input type="text" />

                <input type="text" /></span>
            </span>
          </div>
          <motion.div layoutId='continueToQuiz' className='continue-btn' onClick={HandleContinue} >continue</motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default TakeQuizForm