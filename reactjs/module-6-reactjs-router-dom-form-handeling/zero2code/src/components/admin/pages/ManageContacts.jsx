import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import DataTable from 'react-data-table-component';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
// data tables columns and rows
const columns = [
  {
    name: 'Id',
    selector: (row) => row.id,
  },
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Year',
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
];

export default function ManageContacts() {
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
            <h1>Manage All contacts</h1>
            <DataTable columns={columns} data={data} />
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
