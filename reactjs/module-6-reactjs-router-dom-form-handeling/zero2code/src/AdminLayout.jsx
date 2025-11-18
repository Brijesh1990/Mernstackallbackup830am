import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import AdminHeader from './components/admin/AdminHeader';
import AdminSidebar from './components/admin/AdminSidebar';
import Dashboard from './components/admin/Dashboard';
export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      {/* admin sidebar & Dashboard */}
      <MDBContainer fluid className="">
        <MDBRow>
          {/* sidebar */}
          <AdminSidebar />
          {/* dashboard */}
          <Dashboard />
        </MDBRow>
      </MDBContainer>
    </>
  );
}
