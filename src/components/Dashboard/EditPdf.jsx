import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
function EditPdf({ onHandleEditNote, pdfId, pdfDetails, onHandleEditPdf }) {
    const [title, setTitle] = useState(pdfDetails?.title);
    const [description, setDescription] = useState(pdfDetails?.description);
    const [subject, setSubject] = useState(pdfDetails?.subject);
    const [semester, setSemester] = useState(pdfDetails?.semester);
    const [thumbnail, setThumbnail] = useState(null);
    const [pdf, setPdf] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("subject", subject)
        formData.append("semester", semester)
        formData.append("coverImage", thumbnail)

        try {
            const res = await axios.patch(`/v1/pdfs/${pdfId}`, formData,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                })
            // console.log(res.data.data)
            setPdf(res.data.data)
            toast.success("Note Edited Successfully !")

            setTimeout(() => {
                onHandleEditPdf();
                onHandleEditNote(a)
            }, 2000);
        } catch (err) {
            console.log(err);
        }
    }



    const a = false
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="relative w-[90%] md:w-[50%] bg-white rounded-md " >
                <div className='flex justify-between items-center p-2'>
                    <h1 className='font-bold text-xl text-blue-500'>EditNote</h1>
                    <IoMdClose size={40} className="hover:bg-[#f5f5f5] cursor-pointer p-2 rounded-full" onClick={() => onHandleEditNote(a)} />
                </div>
                <hr />
                <div>
                    <form onSubmit={handleSubmit} className=''>
                        <div className=" p-5 flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <label className="">Title</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                                    placeholder="Enter Title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="">Description</label>
                                <textarea
                                    type="text"
                                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                                    placeholder="Enter Description"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="">Subject</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                                    placeholder="Enter Subject"
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="">Semester</label>
                                <select
                                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                                    onChange={(e) => setSemester(e.target.value)}
                                    value={semester}
                                >
                                    <option value="">Select Semester</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="">Thumbnail</label>
                                <input
                                    type="file"
                                    className="border border-gray-300 rounded-md px-2 py-1  focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                                    placeholder="Upload a img for Pdf Thumbnail"

                                    accept='image/*'
                                    onChange={(e) => { setThumbnail(e.target.files[0]) }}
                                />
                            </div>
                            <div className='mx-auto'>
                                <button className='bg-blue-500 px-6 py-2 rounded-lg shadow-lg text-white hover:bg-blue-700'>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
                <Toaster />
            </div>
        </div>

    )
}

export default EditPdf
