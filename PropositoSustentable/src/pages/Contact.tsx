import { motion } from "framer-motion"
import ContactUs from "../components/ContactUs"
import '../styles/ContactUs.css'

const Contact : React.FC = () => {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      >
<h1>Contacto</h1>
<ContactUs/>

      </motion.div>
    )
  }
  
  export default Contact