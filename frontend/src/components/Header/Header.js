
import './header.css'
import Heading from '../Props/Titles/Heading';
import { Link } from 'react-router-dom';
const Header =() => {



    return (
        <div className='header-wrapper'>
        <div className='header-title'>
        <Heading/>
        </div>
        
        <div className='header-menu'>
           <Link> 
           
                Bem vindo(a) Pessoa!
        </Link>        
            
        
        </div>
      </div>
    )
}









export default Header;



