
import Logo from '../assets/images/PS_RECORTADO.jpg'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
   
            <Link to="/">
              <img src={Logo} className='img-logo-header' alt="Logo"/>
            </Link>
     

       <section className="header-actions">
          <Link to="/" style={{ color: 'black' }}>
             <b>Inicio</b>
          </Link>

          <Link to="/aboutUs" style={{ color: 'black' }}>
            <b>¿Quienes somos?</b>
          </Link>
          
          <Link to="/services" style={{ color: 'black' }}>
            <b>Servicios</b>
          </Link>
          
          <Link to="/contact" style={{ color: 'black' }}>
            <b>Contacto</b>
          </Link>
         

       </section>
    </header>
  )
}

export default Header