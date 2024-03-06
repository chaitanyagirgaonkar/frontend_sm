// import axios from 'axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PdfCard from './PdfCard'

function AllPdf() {
    const axiosPrivate = useAxiosPrivate()
    const [pdf, setPdf] = useState([])
    const navigate = useNavigate()
    const location = useLocation

    useEffect(() => {
        axiosPrivate.get("/v1/pdfs/")
            .then((res) => {
                if (Array.isArray(res.data.data)) {
                    setPdf(res.data.data);
                } else {

                    // Handle the situation where data received is not an array
                }
            })
            .catch((err) => {
                console.log(err);
                navigate('/login', { state: { from: location }, replace: true })
            });
    }, []);



    return (
        <div className=' rounded-lg bg-[#f5f5f5] p-5'>
            <div className=' flex justify-between items-center bg-white mb-3 rounded-lg h-12 p-5'>
                <h1 className='text-blue-500 text-lg font-semibold'>Note's</h1>
                <input type="text"
                    className='w-1/3 border border-blue-500 p-1 rounded-md'
                    placeholder='Search...'
                />
            </div>
            <div>

                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
                    {pdf &&
                        pdf.map((p, index) =>
                            <PdfCard key={index} p={p} />
                        )
                    }



                </div>
            </div>
        </div>
    )
}

export default AllPdf
