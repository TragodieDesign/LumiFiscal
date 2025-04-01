
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,
  faGauge,
  faEnvelope,
  faGear,
  faCakeCandles
} from '@fortawesome/free-solid-svg-icons';
import { Link,   

      } from 'react-router-dom';



const MenuMain =() => {
    console.log ("Menu renderizado")
    return(
        <div className='main-sidebar'>

        <div className='buttons'>
        <Link to={'/'}>
      <button  > 
      <FontAwesomeIcon icon={faGauge} />
        Dashboard
        </button>
        </Link>

        <Link to={'/Employees'}>
      <button  > 
        <FontAwesomeIcon icon={faUser} />
        Colaboradores
        </button>
        </Link>
   
      <Link to ={'/Documents'}>
          
      <button>
      <FontAwesomeIcon icon={faEnvelope} />
        Documentos
        </button>
        </Link>
        <Link to ={'/Fiscal'}>
      <button>
      <FontAwesomeIcon icon={faGear} />
        Obrigações
        </button>
        </Link>



        <Link to ={'/Relatorios'}>
        <button > 
        <FontAwesomeIcon icon={faGear} />
        Relatórios
        </button>
        </Link>
        
                <Link to ={'/Assistant'}>
        <button > 
        <FontAwesomeIcon icon={faGear} />
        Assistente (IA)
        </button>
        </Link>

              <Link to ={'/Options'}>
        <button > 
        <FontAwesomeIcon icon={faGear} />
        Configurações
        </button>
        </Link>




        </div>


        
        </div>
        
    )
}









export default MenuMain;
