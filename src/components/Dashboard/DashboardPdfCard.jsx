import React, { useEffect, useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import axios from 'axios';
import toast from 'react-hot-toast';
import EditPdf from './EditPdf';

function DashboardPdfCard({ p, onDeletePdf, onEditPdf }) {

    const [editPdf, setEditPdf] = useState(false)

    const handleDelete = async (pdfId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Note?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`/v1/pdfs/${pdfId}`);
                onDeletePdf(pdfId); // Update parent state after successful deletion
                toast.success('Note deleted Successfully !');
            } catch (err) {
                console.log(err);
            }
        }
    };
    const handleEditNote = (fal) => {
        setEditPdf(fal)
    }
    const handleEditPdf = () => {
        onEditPdf(); // Call the callback function with edited PDF
        setEditPdf(false);
    };

    const pdfDetails = {
        title: p?.title,
        description: p?.description,
        subject: p?.subject,
        semester: p?.semester,

    }
    useEffect(() => {

    }, [setEditPdf])


    return (
        <div className="w-[80%] border rounded-lg m-auto">
            <div className="flex items-center justify-center p-2">
                <h2 className="text-blue-500 text-xl font-semibold">{p.title}</h2>
            </div>
            <img src={p?.coverImage?.url} alt="" className="" />
            <div className="flex p-2 justify-center items-center gap-5 text-blue-500">
                <div>
                    <FaEdit size={30} className="cursor-pointer" onClick={() => setEditPdf(true)} />
                </div>
                <div>
                    <FaEye size={30} className="cursor-pointer" />
                </div>
                <div>
                    <MdDeleteOutline size={30} className="cursor-pointer" onClick={() => handleDelete(p?._id)} />
                </div>
            </div>

            {
                editPdf &&
                <EditPdf onHandleEditNote={handleEditNote} pdfId={p?._id} pdfDetails={pdfDetails} onHandleEditPdf={handleEditPdf} />
            }
        </div>
    );
}

export default DashboardPdfCard;
