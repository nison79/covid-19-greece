import React from 'react'
import './Content.css'
import { motion } from "framer-motion"


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1},
}



function Content() {
    return (
        <div className = "content">
            <div className="content__section">

                <div className="content__box">
                    <motion.div 
                    transition={{duration:1.5}}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="content__info">
                        <h3 id="1">Yesterday:</h3>
                        <p id="2">80</p>
                    </motion.div>
                </div>

                <div className="content__box2">
                    <motion.div
                    transition={{duration:3}}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    
                    className="content__info">
                        <h3>Last 30 days:</h3>
                        <p>1500</p>
                    </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Content
