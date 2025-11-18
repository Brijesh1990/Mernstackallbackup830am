import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
export default function AddFrenchisease() {
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
            <h1>Add Centers</h1>
            <form>
              <div className="form-group mt-2">
                <input
                  type="text"
                  placeholder="Center Name *"
                  className="form-control"
                />
              </div>
            </form>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
