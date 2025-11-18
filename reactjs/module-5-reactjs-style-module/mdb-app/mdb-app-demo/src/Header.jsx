import React from 'react';
import { MDBContainer, MDBRow, MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <>
      <MDBContainer fluid className="bg-light shadow p-5 sticky-top top-0">
        <MDBRow>
          <div className="col-md-3">
            <b className="fs-4">Call Us :(+91)-9998003879</b>
          </div>

          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                placeholder="search any course to add in Cart"
                className="form-control p-4"
              />
              <MDBBtn className="btn btn-sm btn-dark text-white">
                <span className="fa fa-search"></span>
              </MDBBtn>
            </div>
          </div>

          <div className="col-md-3">
            <span className="fa fa-cart-shopping fs-3 mt-2 ms-2">0</span>
            <span className="fa fa-facebook ms-5 fs-3"></span>
            <span className="fa fa-instagram ms-2 fs-3"></span>
            <span className="fa fa-whatsapp ms-2 fs-3"></span>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
