import React from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function NavbarApp() {
  return (
    <>
      <MDBNavbar className="bg-primary p-2 w-100 navbar-expand-lg navbar">
        {' '}
        <MDBNavbarBrand>Routing</MDBNavbarBrand>
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-account">
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </MDBNavbar>
    </>
  );
}
