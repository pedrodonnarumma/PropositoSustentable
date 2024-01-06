
import '../styles/Carrousel.css'
import { Link } from 'react-router-dom'

const Carrousel = () => {
  return (
    <div className='all-in'>
    <div className='main-container'>
        
        <section className='section-a'>
            <article  className='impacto'>
                <div> Impulsamos tu <br></br>impacto positivo <span className='plus'>+</span></div>
            </article>

            <article className='carrousel-button'>
               <Link to="/aboutUs">
               <button className='carrousel-button-1'>Conócenos</button>
               </Link>  
              
                  
               
            </article>
        </section>
        </div>
        <div>
        <section className='section-b'>
            <article className='frase-carrousel'>
                <p className='frase-1'>"Creando un impacto ambiental positivo a través de la innovación y la colaboración"</p>
            </article>
        </section>
        </div>
        </div>
       

  )
}

export default Carrousel