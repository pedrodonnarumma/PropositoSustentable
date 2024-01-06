import { motion } from "framer-motion"


const Services : React.FC = () => {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      >
       <h1>Servicios</h1>
       <p>Poner tarjetas</p>
      </motion.div>
    )
  }
  
  export default Services