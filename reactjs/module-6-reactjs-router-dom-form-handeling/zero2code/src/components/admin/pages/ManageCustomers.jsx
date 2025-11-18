import React from 'react';
import { MDBContainer, MDBRow, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
export default function ManageCustomers() {
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
            <h1>Manage All Customers</h1>
            <MDBTable>
              <MDBTableBody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>1001</td>
                  <td>Kaushik</td>
                  <td>k@gmail.com</td>
                  <td>9998003879</td>
                  <td>150 feet ring road rajkot</td>
                  <td>Rajkot</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Enable</button>

                    <button className="btn btn-sm btn-danger ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
