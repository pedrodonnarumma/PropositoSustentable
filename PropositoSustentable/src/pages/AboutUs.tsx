import { motion } from 'framer-motion'
import React from 'react'
import Perfil1 from '../assets/images/foto_pia.jpg'
import '../styles/AboutUs.css'
import LinkedinLogo from '../assets/images/LinkedIn_logo_initials.png'

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
       <h3>BLA BLA BLA</h3>

     </section> 

     <article className='perfiles'>
          <div className='perfil-1'>
             
                
                <b>María Pia Santarelli</b>
                <p>Licenciada en Gestión ambiental</p>
                <img className="logo-linkedin" src={LinkedinLogo}/>
         
          </div>

          <div className='perfil-1'>
            <img src={Perfil1} className='foto-1'/>
            <b>María Pia Santarelli</b>
            <p>Licenciada en Gestión ambiental</p>
            <img className="logo-linkedin" src={LinkedinLogo}/>
            
          </div>

          
     </article>
     
     <section className='mision-vision'>
       <article className='mision'>
            <h2>Visión</h2>
            <p>Nuestra misión es empoderar a las organizaciones
para que sean agentes de cambio, catalizando la
transformación hacia prácticas sustentables y
generando valor a largo plazo para su negocio, sus
stakeholders y el planeta. </p>
        </article>

       <article className='mision'>
            <h2>Misión</h2>
            <p>Ser líderes en el impulso de la
sustentabilidad y la
responsabilidad social,
inspirando y acompañando a las
organizaciones hacia un futuro
sostenible, donde la
prosperidad económica, la
equidad social y la preservación
del ambiente se entrelacen de
manera armoniosa.</p>
       </article>

     
      </section>

      <article className='frase-final'>
        
        
        <p>"Nos comprometemos a guiar a nuestros clientes en el camino hacia la excelencia sustentable, ayudándoles a identificar oportunidades, 
          establecer metas ambiciosas y
           adoptar prácticas éticas y responsables"</p>
      

     </article>

    </motion.div>
  )
}

export default AboutUs