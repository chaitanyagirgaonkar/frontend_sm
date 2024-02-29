import React, { useState } from 'react'
import { SlBookOpen } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate, Outlet } from "react-router-dom"
import { GrNotes } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import Sidebar from './Sidebar.jsx'
import SmSidebar from './SmSidebar.jsx';
import useAuth from '../../hooks/useAuth.js';

function Container() {
    const { sidebar } = useAuth()

    return (
        <div className='h-screen w-screen '>
            <div className=' h-[10%] flex  justify-between items-center  pl-5 pr-12 '>
                <div className='flex justify-center items-center gap-3'>
                    <SlBookOpen className="text-2xl text-blue-500 mt-1" />
                    <h1 className='text-blue-500 text-2xl font-semibold'>EduScribe</h1>
                </div>

            </div>
            <hr />
            <div className='w-screen h-[90%] flex'>
                {!sidebar ? <Sidebar className='block' /> :
                    <SmSidebar />
                }
                <div className='w-[95%] bg-[#f5f5f5]  overflow-y-scroll'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Container
