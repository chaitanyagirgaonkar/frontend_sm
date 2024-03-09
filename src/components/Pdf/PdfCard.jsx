
import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

function pdfCard({ p }) {
    const pdfId = useParams()
    const navigate = useNavigate()

    return (
        <div className=' flex  bg-white flex-col  sm:gap-4 gap-2 rounded-lg w-full sm:px-6 sm:py-6 shadow-md px-3 py-3'>

            <div className=' grid grid-cols-[auto_1fr]  sm:gap-6 gap-3 justify-center cursor-pointer '>
                <img src={p?.coverImage?.url}
                    className=' w-40  h-50 rounded-xl object-cover ' />
                <div className=' flex sm:gap-5 gap-3 flex-col justify-start '>
                    <div>
                        <p className=' font-semibold text-xl text-blue-500'>{p.title}</p>
                    </div>

                    <div className=" line-clamp-4 text-sm bg-[#f5f5f5] rounded-md sm:p-3 p-2">{p.description}</div>



                    <div className=' flex sm:flex-row flex-col justify-between text-xs text-gray-500 sm:mt-2 mt-0 sm:gap-0 gap-2 sm:items-end items-center'>

                        <button className='bg-blue-500 px-3 py-2 rounded-md text-white' onClick={() => navigate(`/container/pdf/${p._id}`)}>View Pdf</button>

                        <button className='bg-white hover:bg-blue-500 hover:text-white border border-blue-500 text-blue-500 px-2 py-2 rounded-md'>Download</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default pdfCard
