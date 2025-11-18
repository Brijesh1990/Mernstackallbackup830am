import React from 'react';
import { MDBRow, MDBNavbar, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FaMobile } from 'react-icons/fa';
export default function Header() {
  return (
    <>
      <section id="user-header" fluid className="p-0 bg-primary">
        <MDBRow>
          <div className="col-md-1 p-4">
            <strong className="fs-1 text-white ms-5">Zero</strong>
          </div>
          <div className="col-md-8 p-4">
            <MDBNavbar className="nav navbar navbar-expand-md shadow-0">
              <ul className="navbar-links">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Centers</Link>
                </li>
                <li>
                  <Link to="#">Frenchisies</Link>
                </li>
                <li>
                  <Link to="#">Our courses</Link>
                </li>

                <li>
                  <Link to="#">Placements</Link>
                </li>
                <li>
                  <Link to="#">Blogs</Link>
                </li>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
              </ul>
            </MDBNavbar>
          </div>
          <div className="col-md-3 p-4">
            <Link to="">
              <MDBBtn className="btn btn-outline-white btn-primary text-white fs-5 mt-2 border border-4 border-white rounded-6">
                <FaMobile className="justify-content-end" />
                (+91)-9998003879
              </MDBBtn>
            </Link>
          </div>
        </MDBRow>
      </section>
    </>
  );
}
