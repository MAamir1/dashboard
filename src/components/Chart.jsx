import { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { Paper } from '@mantine/core';

export default function Chart() {
  const [state, setState] = useState({

    series: [{
      name: 'Sales',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Purchase',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      title: {
        text: 'sales overview',
        align: 'center',
      },
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'category',
        categories: ["Jan", "Feb", "March", "April", "May", "June", "July"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },


  });





  return (
    <div>
      <Paper shadow="xs" p="xl">
        <ReactApexChart options={state.options} series={state.series} type="area" height={250} />
      </Paper>
      <div id="html-dist"></div>
    </div>
  )
}
