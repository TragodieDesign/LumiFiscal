
import './App.css';
import MenuMain from './components/sidebar/MenuMain';
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Employees from './Screens/Employees';
import Dashboard from './Screens/Dashboard';
import Fiscal from './Screens/Fiscal';
import Relatorios from './Screens/Relatorios';
import Assistant from './Screens/Assistant';
import AuthScreen from './Screens/AuthScreen';
import MailSignature from './Screens/MailSignature';
import Options from './Screens/Options';
import Header from './components/Header/Header';
import Heading from './components/Props/Titles/Heading';
import Birthday from './Screens/Birthday';

function App() {
  return (
    
    <BrowserRouter>
    
        <div className="App">
          
      <header className="App-header">
        
      <MenuMain/>

      </header>
      
      <div className="board">

        <Header/>

      <Routes>
        <Route path='/'
        element={<Dashboard/>}/>
        <Route path='Employees'
        element={<Employees/>}/>
        <Route path='MailSignature'
        element={<MailSignature/>}/>
        <Route path='Options'
        element={<Options/>}/>
        <Route path='Birthday'
        element={'Birthday'}/>
        <Route path='Assistant'
        element={'Assistant'}/>
        <Route path='Documents'
        element={'Documents'}/>
        <Route path='Relatorios'
        element={'Relatorios'}/>
        <Route path={'Fiscal'}
        element={'Fiscal'}/>

        
        </Routes>
      </div>

    </div>
    </BrowserRouter>
    

  );
}

export default App;
