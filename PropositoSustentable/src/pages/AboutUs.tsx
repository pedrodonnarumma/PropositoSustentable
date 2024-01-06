import { motion } from 'framer-motion'
import React from 'react'
import Perfil1 from '../assets/images/foto_pia.jpg'
import '../styles/AboutUs.css'


const AboutUs : React.FC = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.2 }}
    >
      <section className='title'>
     
       <h1>Nuestro equipo</h1>
       <p>BLA BLA BLA</p>

     </section> 

     <article className='perfiles'>
          <div className='perfil-1'>
            <img src={Perfil1} className='foto-1'/>
            <b>María Pia Santarelli</b>
            <p>Licenciada en Gestión ambiental</p>
          </div>

          <div className='perfil-1'>
            <img src={Perfil1} className='foto-1'/>
            <b>María Pia Santarelli</b>
            <p>Licenciada en Gestión ambiental</p>
          </div>

          
     </article>
     
     <section className='mision-vision'>
       <article className='vision'>
            <h2>Visión</h2>
            <p>bla bla bla</p>
        </article>

       <article className='mision'>
            <h2>Misión</h2>
            <p>bla bla bla</p>
       </article>

      </section>
    </motion.div>
  )
}

export default AboutUs