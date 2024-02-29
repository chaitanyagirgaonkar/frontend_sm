import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function PdfOne() {
    const { pdfId } = useParams()
    const [pdf, setPdf] = useState([])


    useEffect(() => {
        axios.get(`/v1/pdfs/${pdfId}`)
            .then((res) => {
                console.log(res.data.data)
                setPdf(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className='bg-[#f5f5f5] p-5'>
            <div className='grid sm:grid-cols-2 justify-between bg-white flex-row rounded-lg w-full p-8'>
                <div className='flex-1 rounded-lg overflow-hidden w-[500px] h-[500px] bg-[#f5f5f5] relative'>
                    {/* Add position relative to the container */}
                    <embed src={`${pdf?.pdfFile?.url}#toolbar=0`} type="application/pdf" width="100%" height="100%" style={{ overflow: 'hidden', position: 'absolute', top: 0, left: 0 }} />
                </div>
                <div className='bg-[#f5f5f5] rounded-lg p-5 flex flex-col gap-3'>
                    <h1 className='font-semibold text-md '><span className='text-lg font-semibold text-black'>Title : </span>{pdf?.title}</h1>
                    <h1> <span className='text-lg font-semibold text-black'>Description :</span>{pdf?.description}</h1>
                    <h1> <span className='text-lg font-semibold text-black'>Subject : </span>Software testing and Quality assurance. </h1>
                    <h1> <span className='text-lg font-semibold text-black'>Semester :</span> 6th</h1>
                    <div className=' flex items-center justify-center'>
                        <button className='bg-blue-500 text-white px-3 py-2 rounded-md '>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PdfOne
