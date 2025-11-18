import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function AdminLogin() {
  return (
    <>
      <MDBContainer className="p-5 mt-5">
        <MDBRow>
          <div className="col-md-6 p-2">
            <img
              src="https://assets-v2.lottiefiles.com/a/59ae3046-117b-11ee-88a7-ef3838e9662f/r8HuxylbzH.gif"
              alt="admin"
              className="w-75 ms-5"
            />
          </div>
          <div className="col-md-5 ms-5 p-5 shadow">
            <p className="text-center">
              <FaUser className="fs-1 bg-success p-1 text-white rounded-circle" />
            </p>
            <form>
              <div className="form-group mt-2">
                <input
                  type="text"
                  placeholder="Email *"
                  className="form-control"
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="password"
                  placeholder="password *"
                  className="form-control"
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="submit"
                  className="btn btn-success btn-md"
                  value="SignIn"
                />
                <Link to="" className="ms-2 fs-5">
                  Forget Password ?
                </Link>
              </div>
              <div className="mt-3"></div>
            </form>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
