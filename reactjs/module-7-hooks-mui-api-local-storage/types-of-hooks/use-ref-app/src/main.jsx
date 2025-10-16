import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import ContactUs from './ContactUs'
import Feedback from './Feedback'
import PageNotFound from './PageNotFound'
// admin routing
import Login from './admin/Login'
import AdminLayout from './AdminLayout'
import AddEmployee from './admin/AddEmployee'
import ManageEmployee from './admin/ManageEmployee'
import DeleteEmployee from './admin/DeleteEmployee'
import EditEmployee from './admin/EditEmployee'
import ManageContact from './admin/ManageContact'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/admin-login' element={<Login />} />
        <Route path='/admin-login/dashboard' element={<AdminLayout />} />
         <Route path='/admin-login/manage-contact' element={<ManageContact />} />
         <Route path='/admin-login/add-employee' element={<AddEmployee />} />
         <Route path='/admin-login/manage-employee' element={<ManageEmployee />} />
          <Route path='/admin-login/delete-employee/:id' element={<DeleteEmployee />} />
          <Route path='/admin-login/edit-employee/:id' element={<EditEmployee />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
