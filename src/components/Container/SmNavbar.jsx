import React, { useState } from 'react'
import { SlBookOpen } from "react-icons/sl";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useNavigate, Outlet } from "react-router-dom"

function SmNavbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className=' h-[10%] flex bg-white justify-between items-center  p-3  mb-5'>
            <div className='flex justify-center items-center gap-3'>
                <SlBookOpen className="text-2xl text-blue-500 mt-1" />
                <h1 className='text-blue-500 text-2xl font-semibold'>EduScribe</h1>
            </div>
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
            </div>

            <ul className={!nav ? 'hidden' : '  absolute top-0 left-0 w-full h-screen bg-blue-300 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='/' smooth="true" duration={500} >Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='/container/all-pdf' smooth="true" duration={500} >Notes</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='/container/all-project' smooth="true" duration={500} >Project</Link></li>
                {/* <li className='py-6 text-4xl'><Link onClick={handleClick} to='project' smooth={true} duration={500} >Project</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500} >Contact</Link></li> */}
            </ul>
        </div>
    )
}

export default SmNavbar
