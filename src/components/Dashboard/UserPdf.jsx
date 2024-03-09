import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import DashboardPdfCard from './DashboardPdfCard';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import AddPdf from './AddPdf';

function UserPdf() {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const [pdf, setPdf] = useState([]);
    const location = useLocation();
    const [AddNote, setAddNote] = useState(false)

    useEffect(() => {
        axiosPrivate
            .get('/v1/pdfs/pdfs')
            .then((res) => {
                if (Array.isArray(res.data.data)) {
                    setPdf(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
                navigate('/login', { state: { from: location }, replace: true });
            });
    }, []);

    const handleDeletePdf = (pdfId) => {
        setPdf(pdf.filter((p) => p._id !== pdfId));
    };

    const handleAddNote = (fal) => {
        setAddNote(fal)
    }

    return (
        <div>
            <div className="bg-white flex justify-end items-end pt-3 pr-3">
                <button className="border border-blue-500 rounded-lg bg-blue-500 text-white px-4 py-2" onClick={() => setAddNote(true)}>Add Notes</button>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-2 bg-white p-5 ">
                {pdf.map((p, index) => (
                    <DashboardPdfCard key={index} p={p} onDeletePdf={handleDeletePdf} />
                ))}
            </div>

            {
                AddNote &&
                <AddPdf onHandleAddNote={handleAddNote} />
            }
        </div>
    );
}

export default UserPdf;
