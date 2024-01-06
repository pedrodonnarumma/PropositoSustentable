import { motion } from 'framer-motion'
import React from 'react'

const AboutUs : React.FC = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.2 }}
    >
     <h1>Nuestro equipo</h1>
     <p>BLA BLA BLA</p>
    </motion.div>
  )
}

export default AboutUs