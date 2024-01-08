import '../styles/Footer.css'
import Logo from '../assets/images/Logo PS Fondo Color.jpg'

const Footer = () => {
  return (
    <footer>
        
       <article className='logo-container'>
           
              <img src={Logo} className='img-logo' alt="Logo" />
           
              </article>

              <article className='info-container'>
           
           <p>proposito@gmail.com</p>
           <p>Mendoza, Argentina</p>
        
           </article>


    </footer>
  )
}

export default Footer