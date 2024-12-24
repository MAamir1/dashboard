import React from 'react'

export default function Analyticscard({ data }) {

  return (
    <div className='rounded-md px-2 py-3 mb-3' style={{ backgroundColor: data.bgcolor }}>
      <h1 className='text-center text-2xl font-bold mb-1'>{data.line1}</h1>
      <h2 className='text-center font-bold mb-1'>{data.line2}</h2>
      <p className='text-center'>{data.line3}</p>
    </div>
  )
} 