import React from 'react'
import Analyticscard from '../components/Analyticscard'
import Chart from '../components/Chart'
import Progress from '../components/Progress'

export default function Dashboard() {

  const analyticdata = [
    { line1: "6k", line2: "Last Seven Days Sale", line3: "10% last 7 days Increase", bgcolor: "#EEFEFD" },
    { line1: "10k", line2: "Total Units", line3: "10% last 7 days Increase", bgcolor: "#FFEEEF" },
    { line1: "4k", line2: "Remaining", line3: "10% last 7 days Increase", bgcolor: "#F2E8FF" },
    { line1: "100k", line2: "Last Month's units", line3: "10% last 7 days Increase", bgcolor: "#FDF2EE" },
  ]


  return (
    <div className='container p-2 mb-5'>
      <h1 className='text-center text-xl font-bold mb-3'>Analytics</h1>
      <div className='grid grid-cols-4 gap-5'>
        {
          analyticdata.map((data, index) => {
            return <Analyticscard data={data} key={index} />
          })
        }
      </div>
      <div className='grid grid-cols-[2fr_1fr] gap-5'>
        <Chart />
        <Progress />
      </div>
    </div>
  )
}
