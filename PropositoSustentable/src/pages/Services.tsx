import { motion } from "framer-motion"
import Tarjeta from '../components/Tarjeta'
import '../styles/Services.css'



const Services : React.FC = () => {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      >
        <section className="title">
          <h1>Servicios</h1>
          <h3 className="subtitulo">Cada uno de nuestros servicios está diseñado para apoyar a las organizaciones en su camino hacia la sustentabilidad y la responsabilidad social, brindando soluciones
             integrales y personalizadas para abordar los desafíos actuales y futuros. </h3>
        </section>
      <section className="tarjetas">
        <Tarjeta nombre="REPORTES " descripcion="Este es un ejemplo de componente con constructor en TSX" />
        <Tarjeta nombre="ESTRATEGIA DE SUSTENTABILIDAD 360°" descripcion="Este es un ejemplo de componente con constructor en TSX" />
        <Tarjeta nombre="CAPACITACIÓN A COLABORADORES Y CADENA DE VALOR" descripcion="Este es un ejemplo de componente con constructor en TSX" />
        <Tarjeta nombre="MEDICIONES" descripcion="Este es un ejemplo de componente con constructor en TSX" />
        <Tarjeta nombre="PROGRAMAS CON LA COMUNIDAD Y PARTES INTERESADAS" descripcion="Este es un ejemplo de componente con constructor en TSX" />
        <Tarjeta nombre="COMPLIANCE" descripcion="Este es un ejemplo de componente con constructor en TSX" />
        <Tarjeta nombre="EVALUACIÓN DE IMPACTO AMBIENTAL" descripcion="Este es un ejemplo de componente con constructor en TSX" />
       
       </section>
      </motion.div>
    )
  }
  
  export default Services