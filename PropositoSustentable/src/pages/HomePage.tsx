import { motion } from 'framer-motion'
import CarrouselTest from '../components/CarrouselTest'
import '../styles/HomePage.css'
import ContactUs from '../components/ContactUs'
import { Link } from 'react-router-dom'

const HomePage : React.FC = () => {




  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.2 }}>
  
      <section className='section-1'>
      <CarrouselTest/>
      </section>
      <section id="quienes-somos" >
        {/* Contenido de la sección de contacto */}
        <h2 className='h2-home'>¿Quienes somos?</h2>
        {/* Formulario de contacto u otra información */}
      
        <p className='parrafo-home'>Detalles de contacto...
        Detalles de contacto...
       
        
        </p>
        <article className='button-a'>
               <Link to="/aboutUs">
               <button className='button-about-us'>Ver más</button>
               </Link>
               
            </article>
      </section>
      <section id="servicios" >
        {/* Contenido de la sección de contacto */}
        <h2 className='h2-home'>Nuestros servicios</h2>
        {/* Formulario de contacto u otra información */}
      
        <p className='parrafo-home'>Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        Detalles de contacto...
        
        </p>
        <article className='button-a'>
               <Link to="/services">
                  <button className='button-about-us'>Ver más</button>
               </Link>
               
            </article>
      </section>
      <section id="contacto">
        {/* Contenido de la sección de contacto */}
        <h2 className='h2-home'>Contacto</h2>
        {/* Formulario de contacto u otra información */}
      
      <ContactUs/>

      </section>
      

      
    </motion.div>
  )
}

export default HomePage