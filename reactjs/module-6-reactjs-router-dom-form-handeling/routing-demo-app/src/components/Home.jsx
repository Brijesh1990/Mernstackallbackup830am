import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
export default function Home() {
  return (
    <>
      <MDBContainer>
        <h1 className="text-center mt-5">Home</h1>
        <p className="text-center">Welcome to the Home page!</p>
        <p className="text-center">
          This is a simple example of a home page using MDB React UI Kit.
        </p>
      </MDBContainer>
    </>
  );
}
