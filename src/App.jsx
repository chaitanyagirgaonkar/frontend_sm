import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AllPdf from './components/Pdf/AllPdf.jsx'

import { AuthProvider } from './context/AuthProvider'
import Container from './components/Container/Container.jsx'
import AllProject from './components/Project/AllProject.jsx'
import PdfOne from './components/Pdf/PdfOne.jsx'

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/container" element={<Container />}>
            <Route path='pdf/:pdfId' element={<PdfOne />} />
            <Route path="all-pdf" element={<AllPdf />} />
            <Route path="all-project" element={<AllProject />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
