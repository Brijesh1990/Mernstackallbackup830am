import React from 'react'
import Header from './admin/Header'
import Sidebar from './admin/Sidebar'
import Dashboard from './admin/Dashboard'
export default function AdminLayout() {
  return (
    <>
    <Header />
    <div className='p-0 w-full flex flex-row'>
            <div className='w-65 bg-black p-10'>
             <Sidebar />   
            </div>
            <div className='w-full'>
            <Dashboard />
        </div>

     </div>
    </>
  )
}
