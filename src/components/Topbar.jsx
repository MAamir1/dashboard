import React from 'react'
import { Search, BellDot } from 'lucide-react';
import  avatar from '../assets/avatar.png';


export default function Topbar() {
    return (
        <div className='ps-5'>
            <div className='flex items-center gap-16'>
                <div className='flex items-center ps-8 shadow-md gap-3 w-[70%] h-12 border rounded-md mt-2'>
                    <div className='text-[#9FA6B2]' ><Search/></div>
                    <input type="search" placeholder='Search Files...' className='w-full outline-none text-sm text-gray-700' />
                </div>
                <div className='flex items-center gap-4'>
                    <div><BellDot/></div>
                    <div className='w-10 h-10 border rounded-full overflow-hidden'><img src={avatar} alt="User Avatar" className="w-full h-full object-cover" /></div>
                </div>
            </div>
        </div>
    )
}
