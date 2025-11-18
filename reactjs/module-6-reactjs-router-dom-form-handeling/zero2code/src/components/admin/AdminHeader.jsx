import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { FaLine, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <>
      <MDBContainer fluid className="p-4 bg-dark border-bottom border-white">
        <MDBRow>
          <div className="col-md-5">
            <h4 className="text-white">
              Zero2Code Admin <FaLine className="ms-3" />
            </h4>
          </div>
          <div className="col-md-7">
            <form>
              <div className="input-group w-100">
                <input
                  type="text"
                  placeholder="search here"
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-md btn-primary text-white"
                >
                  <FaSearch />
                </button>
                {/* welcome admin account */}
                <ul className="navbar-links">
                  <li className="dropdown">
                    <Link to="" className="dropdown-toggle">
                      <FaUser />
                      <ul className="dropdown-menu"></ul>
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
