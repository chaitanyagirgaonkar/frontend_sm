import React from 'react'
import '../../App.css'
import home from '../../assets/undraw_book_lover_re_rwjy.svg'
import { SlBookOpen } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate()
    return (
        <div className='h-screen w-screen '>
            <div className=' h-[14%] flex  justify-between items-center  pl-12 pr-12'>
                <div className='flex justify-center items-center gap-3'>
                    <SlBookOpen className="text-2xl text-blue-500 mt-1" />
                    <h1 className='text-blue-500 text-2xl font-semibold'>EduScribe</h1>
                </div>
                <div className='p-5'>
                    <ul className='flex justify-between items-center gap-7 text-gray-500 text-[18px] p-3'>
                        <li className='cursor-pointer'><Link to='/'>Home</Link></li>
                        <li className='cursor-pointer'><Link to='/container/all-pdf'>Notes</Link></li>
                        <li className='cursor-pointer'><Link to="/container/all-project">Project</Link></li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <button className='rounded-lg bg-blue-500 px-3 py-2 font-mono text-white text-1xl'>Login</button>
                    <button className='rounded-lg bg-blue-500 px-3 py-2 font-mono text-white text-1xl'>Register</button>
                </div>

            </div>
            <div className='flex w-screen h-[86%] justify-between items-center  pl-20 pr-16'>
                <div className=' w-[40%] flex flex-col gap-8'>
                    <h3 className='text-gray-500'>EduScribe</h3>
                    <div>
                        <h1 className='text-4xl text-blue-700'>Your <span className='text-black font-light'>Notes,</span> Your <span className='text-black font-light'> Projects,</span></h1>
                        <h1 className='text-4xl text-blue-700'><span className='text-black font-light'>Your</span> Success!</h1>
                    </div>
                    <p className='text-gray-500'>"Struggling to keep up with your academic workload? EduScribe has you covered! Dive into a world of organized learning with our one-stop platform. "</p>
                    <div>
                        <button className='rounded-lg bg-blue-500 px-3 py-3 font-mono text-white text-1xl' onClick={() => navigate('/container/all-pdf')}>View Model</button>

                    </div>
                </div>
                <div className='flex justify-center h-[60%]'>
                    <img src={home} alt="" className='' />
                </div>
            </div>
        </div>
    )
}

export default Home