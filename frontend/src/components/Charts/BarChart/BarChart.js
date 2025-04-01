import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
    const jan=100;
    const fev=100;
    const mar=100;
    const abr=100;
    const mai=100;
    const jun=100;
    const jul=100;
    const ago=100;
    const set=100;
    const out=100;
    const nov=100;
    const dez=100;
    

  return (
    <BarChart
    xAxis={[{ data: ['Jan', 'Fev', 'Mar', 'Abr','Mai','Jun', 'Ago', 'Set', 'Out', 'Nov', 'Dez',], scaleType: 'band', dataKey:'month', label:"Mês" }]}
      series={[
        { data: [jan, fev, mar, abr, mai,jun,jul,ago,set,out,nov,dez] },



      ]}
      yAxis={[{ label:"N° de funcionários" }]}
      height={250}
      width={500}
      
      margin={{ top: 10, bottom: 60, left: 40, right: 40 }}
    />
  );
}