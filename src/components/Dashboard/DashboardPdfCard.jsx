import React from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import axios from 'axios';
import toast from 'react-hot-toast';

function DashboardPdfCard({ p, onDeletePdf }) {
    const handleDelete = async (pdfId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Note?');
        if (confirmDelete) {
            try {
                await axios.delete(`/v1/pdfs/${pdfId}`);
                onDeletePdf(pdfId); // Update parent state after successful deletion
                toast.success('Note deleted Successfully !');
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="w-[80%] border rounded-lg m-auto">
            <div className="flex items-center justify-center p-2">
                <h2 className="text-blue-500 text-xl font-semibold">{p.title}</h2>
            </div>
            <img src={p?.coverImage?.url} alt="" className="" />
            <div className="flex p-2 justify-center items-center gap-5 text-blue-500">
                <div>
                    <FaEdit size={30} className="cursor-pointer" />
                </div>
                <div>
                    <FaEye size={30} className="cursor-pointer" />
                </div>
                <div>
                    <MdDeleteOutline size={30} className="cursor-pointer" onClick={() => handleDelete(p?._id)} />
                </div>
            </div>
        </div>
    );
}

export default DashboardPdfCard;
