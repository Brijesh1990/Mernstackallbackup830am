import React from 'react';
import { Container, Row, Card, Navbar } from 'react-bootstrap';
import NavApp from './Navbar';
function ContactUs() {
  return (
    <>
      <NavApp />
      <Container className="bg-primary p-5 mt-5">
        <h1 className="text-center text-white">
          Contact us <span className="bi bi-telephone"></span>
          <Row>
            <div className="col-md-5 m-2 ms-5 shadow p-3 bg-white"></div>
            <div className="col-md-5 m-2 ms-5 shadow p-3 bg-white"></div>
          </Row>
        </h1>
      </Container>
    </>
  );
}

export default ContactUs;
