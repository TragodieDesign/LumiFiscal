import './Dashboard.css'
import PieChartDash from '../components/Charts/PieChart/PieChart';
import ChartsOverviewDemo from '../components/Charts/BarChart/BarChart';

const total=10



const Dashboard =() => {
    console.log ("Menu renderizado")
    
    return (
        <div className='dashboard-wrapper'>

          <div className='dashboard-row'>
           
           <div className='dashboard-card'>
           <h2>Colaboradores:{total}</h2>
            <PieChartDash/>

      
           </div>

           <div className='dashboard-card flex-2'>
            <h2>Finanças</h2>
           <ChartsOverviewDemo/>
           </div>
            
          </div>
          <div className='dashboard-row'>
          <div className='dashboard-card'>
            card
           </div>
           <div className='dashboard-card'>
            card
           </div>
           <div className='dashboard-card'>
            <h2>Atividades Recentes</h2>
           </div>
          </div>

            
        </div>
    )
}









export default Dashboard;



