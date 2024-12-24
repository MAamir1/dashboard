import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenavbar from '../components/Sidenavbar'
import Topbar from '../components/Topbar'

export default function () {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5'>
        <div className='bg-[#F9F9F9] h-screen'>
          <aside>
            <Sidenavbar />
          </aside>
        </div>

        <div className='main bg-[#FFFFFF]'>
          <Topbar/>
          <main>

            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
