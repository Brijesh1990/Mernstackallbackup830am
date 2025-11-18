import React from 'react';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import NavbarApp from './Navbar';
import { Link } from 'react-router-dom';
export default function PageNotFound() {
  return (
    <>
      <NavbarApp />
      <MDBContainer>
        <h1 className="text-center mt-5">Page not found(404 error)</h1>
        <p className="text-center">
          <Link to="/">
            <MDBBtn className="mt-3" color="primary" href="/">
              Go to Home
            </MDBBtn>
          </Link>
        </p>
      </MDBContainer>
    </>
  );
}
