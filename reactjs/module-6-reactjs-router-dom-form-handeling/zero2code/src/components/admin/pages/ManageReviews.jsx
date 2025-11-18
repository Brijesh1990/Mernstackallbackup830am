import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
export default function ManageReviews() {
  return (
    <>
      <AdminHeader />
      {/* admin sidebar & Dashboard */}
      <MDBContainer fluid className="">
        <MDBRow>
          {/* sidebar */}
          <AdminSidebar />
          {/*Manage Customers */}
          <div className="col-md-10 p-5 vh-100">
            <h1>Manage All Reviews</h1>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
