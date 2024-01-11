import { Component } from 'react';
import '../styles/Tarjeta.css'

 

interface MiComponenteProps {
  nombre: string;
  descripcion: string;
}

interface MiComponenteState {
  nombre: string;
  descripcion: string;
}

class MiComponente extends Component<MiComponenteProps, MiComponenteState> {
  constructor(props: MiComponenteProps) {
    super(props);
    
    this.state = {
      nombre: props.nombre,
      descripcion: props.descripcion
    };
  }



  render() {
    return (
      <div className='tarjeta'>
        <div className='texto-tarjeta'>
            <h1 className='titulo'>{this.state.nombre}</h1>
            <p className='descripcion'>{this.state.descripcion}</p>
            <button className='boton'>Ver más</button>
        </div>
      </div>
    );
  }
}

export default MiComponente;









