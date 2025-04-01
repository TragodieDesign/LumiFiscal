
import './heading.css'
import { useLocation } from 'react-router-dom';

const Heading =() => {
    const location = useLocation();

    const routeNames = {
        '/': 'Dashboard',
        '/Employees': 'Colaboradores',
        '/MailSignature':'Assinatura de e-mail',
        '/Options': 'Opções',
        '/Birthday':'Aniversariantes'



    }

   // Use o pathname para buscar o nome correspondente
   const routeName = routeNames[location.pathname] || 'Page Not Found';
    return (
        <div className='heading-wrapper'>
            <h2 className='heading-title'>{routeName}</h2>
        </div>
    )
}









export default Heading;



