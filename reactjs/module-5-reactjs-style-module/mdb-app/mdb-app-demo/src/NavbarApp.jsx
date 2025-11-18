import React from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
export default function NavbarApp() {
  return (
    <MDBNavbar className="w-100 p-2 bg-dark p-2">
      <MDBNavbarBrand className="text-white fs-3 p-2 ms-4">
        Zero2Code
      </MDBNavbarBrand>
      <ul className="navbar-links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Ourse Courses</a>
        </li>
        <li>
          <a href="">Feedback</a>
        </li>
        <li>
          <a href="">Our blogs</a>
        </li>
        <li>
          <a href="">Workshop</a>
        </li>
        <li>
          <a href="">Contact us</a>
        </li>
      </ul>
    </MDBNavbar>
  );
}
