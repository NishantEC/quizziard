import React, { useEffect, useState } from 'react'
import '../styles/components/appBackground.scss'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';
const AppBackground = ({ children }) => {
    const location = useLocation();
    const [mulFactor, setMulFactor] = useState(1);


    useEffect(() => {

        const path = location.pathname
        if(path==='/'){
            setMulFactor(1)
        }
        if(path==='/TakeQuiz'){
            setMulFactor(2.5)
        }
        if(path==='/Quiz'){
            setMulFactor(5)
        }


    }, [location.pathname]);
    const circleVariants = {
        initial: {
            scale: 0,
            x: 0,
            y: 0,
            rotate: "0deg"
        },
    }

    return (
        <div className='appBackground-conatiner'>
            <div className="app-content">
                {children}
            </div>
            <div className="floating-circles">
            <motion.div
                    initial={circleVariants.initial}
                    animate={{
                        scale: 0.6,
                        x: -(window.innerWidth/2)*0.3*mulFactor,
                        y: (window.innerHeight/2)*0.3*mulFactor,
                        rotate: "360deg"
                    }}
                    transition={{ duration: 1 }}
                    className="circle" />
                <motion.div
                    initial={circleVariants.initial}
                    animate={{
                        scale: 1.1,
                        x: (window.innerWidth/2)*0.5*mulFactor,
                        y: (window.innerHeight/2)*0.8*mulFactor,
                        rotate: "360deg"
                    }}
                    transition={{ duration: 1 }}
                    className="circle" />
    
                <motion.div
                    initial={circleVariants.initial}
                    animate={{
                        scale: 0.2,
                        x: -(window.innerWidth/2)*0.3*mulFactor,
                        y: -(window.innerHeight/2)*0.1*mulFactor,
                        rotate: "360deg"
                    }}
                    transition={{ duration: 1 }}
                    className="circle" />
                <motion.div
                    initial={circleVariants.initial}
                    animate={{
                        scale: 0.8,
                        x: -(window.innerWidth/2)*0.5*mulFactor,
                        y: -(window.innerHeight/2)*0.1*mulFactor,
                        rotate: "360deg"
                    }}
                    transition={{ duration: 1 }}
                    className="circle" />
                <motion.div
                    initial={circleVariants.initial}
                    animate={{
                        scale: 0.8,
                        x: (window.innerWidth/2)*0.4*mulFactor,
                        y: -(window.innerHeight/2)*1*mulFactor,
                        rotate: "360deg"
                    }}
                    transition={{ duration: 1 }}
                    className="circle" />
                <motion.div
                    initial={circleVariants.initial}
                    animate={{
                        scale: 1.3,
                        x: -(window.innerWidth/2)*1.3*mulFactor,
                        y: -(window.innerHeight/2)*0.9*mulFactor,
                        rotate: "360deg"
                    }}
                    transition={{ duration: 1 }}
                    className="circle" />




            </div>
        </div>
    )
}

export default AppBackground