import React from 'react';
// import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
export default function AdminSidebar() {
  return (
    <>
      <div className="col-md-2 bg-dark m-0 p-0 shadow vh-100">
        <ul className="sidebar-links">
          <li>
            <Link to="/admin-login/dashboard">
              <FaUser />
              &nbsp;Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin-login/manage-customers">
              <FaUser />
              &nbsp;Manage Customers
            </Link>
          </li>
          <li>
            <Link to="/admin-login/addcenters">
              <FaUser />
              &nbsp;Add Centers
            </Link>
          </li>
          <li>
            <Link to="/admin-login/addfrenchisease">
              <FaUser />
              &nbsp;Add Frenchisese
            </Link>
          </li>
          <li>
            <Link to="/admin-login/addcourse">
              <FaUser />
              &nbsp;Add Courses
            </Link>
          </li>
          <li>
            <Link to="/admin-login/addblogs">
              <FaUser />
              &nbsp;Add Blogs
            </Link>
          </li>
          <li>
            <Link to="/admin-login/managereviews">
              <FaUser />
              &nbsp;Manage Reviews
            </Link>
          </li>
          <li>
            <Link to="/admin-login/managecontacts">
              <FaUser />
              &nbsp;Manage Contacts
            </Link>
          </li>
          <li>
            <Link to="">
              <FaUser />
              &nbsp;Logged in on :
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
