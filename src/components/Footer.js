import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1},
  }
 
function Footer() {
    return (
        <motion.div
        transition={{duration:3}}
        initial="hidden"
        animate="visible"
        variants={variants}
        className = "footer">
                <p>George Nikoglou © 2020</p>
        </motion.div>
    )
}

export default Footer
