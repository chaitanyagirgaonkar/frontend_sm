import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PdfCard from './PdfCard'

function AllPdf() {
    const [pdf, setPdf] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("/v1/pdfs/")
            .then((res) => {
                console.log(res.data.data)
                setPdf(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])


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

                <div className="grid grid-cols-2 gap-4 ">
                    {
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
