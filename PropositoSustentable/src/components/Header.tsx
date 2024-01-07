
import Logo from '../assets/images/PS_RECORTADO.jpg'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
   
            <Link to="/" style={{ display: 'inline-block', width: '220px', height: 'auto' ,position: 'relative', left: '200px'}}>
              <img src={Logo} className='img-logo-header' alt="Logo" style={{ display: 'inline-block' }}/>
            </Link>
     

       <section className="header-actions">
          <Link to="/" style={{ color: 'black' }}>
             <b className='header-names'>Inicio</b>
          </Link>

          <Link to="/aboutUs" style={{ color: 'black' }}>
            <b className='header-names'>¿Quienes somos?</b>
          </Link>
          
          <Link to="/services" style={{ color: 'black' }}>
            <b className='header-names'>Servicios</b>
          </Link>
          
          <Link to="/contact" style={{ color: 'black' }}>
            <b className='header-names'>Contacto</b>
          </Link>
         

       </section>
    </header>
  )
}

export default Header