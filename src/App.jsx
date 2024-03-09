import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AllPdf from './components/Pdf/AllPdf.jsx'
import { AuthProvider } from './context/AuthProvider'
import Container from './components/Container/Container.jsx'
import AllProject from './components/Project/AllProject.jsx'
import PdfOne from './components/Pdf/PdfOne.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import RequireAuth from './RequireAuth.jsx'
import PersistLogin from './components/PersistLogin.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import UserPdf from './components/Dashboard/UserPdf.jsx'
import UserProject from "./components/Dashboard/UserProject.jsx"
import UpdateUser from "./components/Dashboard/UpdateUser"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/container" element={<Container />}>
                <Route path='pdf/:pdfId' element={<PdfOne />} />
                <Route path="all-pdf" element={<AllPdf />} />
                <Route path="all-project" element={<AllProject />} />
                <Route path="dashboard" element={<Dashboard />} >
                  <Route index element={<UserPdf />} />
                  <Route path='user-project' element={<UserProject />} />
                  <Route path='update-user' element={<UpdateUser />} />
                </Route>
              </Route>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
