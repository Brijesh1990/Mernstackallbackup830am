import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import NavbarApp from './Navbar';
export default function About() {
  return (
    <>
      <NavbarApp />
      <MDBContainer>
        <h1 className="text-center mt-5">About</h1>
        <p className="text-center">Welcome to the About page!</p>
        <p className="text-center">
          This is a simple example of a home page using MDB React UI Kit.
        </p>
      </MDBContainer>
    </>
  );
}
