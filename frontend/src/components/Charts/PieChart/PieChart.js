
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartDash =()=>{
    return(
<PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 10, label: 'series C' },
        { id: 3, value: 10, label: 'series D' },
        { id: 4, value: 10, label: 'series E' },
      ],
    },
  ]}
  width={400}
  height={250}
/>
    )
}




export default PieChartDash;


