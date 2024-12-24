import React, { useState } from 'react'
import { House, StickyNote, CopyPlus, UserRound, LayoutDashboard, AlignJustify, Home } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'

export default function Sidenavbar() {
  const [linkisactive, setLinkisactive] = useState(0)





  const links = [
    { title: "Home", icon: <House />, path: '/' },
    { title: "Posts", icon: <StickyNote />, path: '/posts' },
    { title: "Users", icon: <UserRound />, path: '/users' },
    { title: "Categories", icon: <CopyPlus />, path: '/categories' }


  ]
  const active = (index) => {
    setLinkisactive(index)
  }
  const inactive =()=>{
    setLinkisactive(null);
  }


  return (
    <div>
      <div className=' '>
        <Link to="/" onClick={inactive} className='flex gap-3 px-8 mb-8 py-5'><LayoutDashboard/> <span>Blogs</span></Link>
      </div>
      <div className=''>
        <ul className='space-y-3'>
          {
            links.map((link, index) => {
              return (
                <li onClick={() => { active(index) }} className={`py-2 border rounded-full mx-2 ${(linkisactive == index) ? "bg-teal-300" : ""}`} key={index} >
                  <NavLink to={link.path} className='flex gap-3 px-5'><span>{link.icon}</span> {link.title} </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>

  )
}
