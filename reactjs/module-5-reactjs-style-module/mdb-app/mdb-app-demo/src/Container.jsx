import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBBadge,
  MDBBtn,
  MDBCardHeader,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import Header from './Header';
import NavbarApp from './NavbarApp';
import Category from './Category';
import CourseData from './CourseData';
export default function ContainerApp() {
  return (
    <>
      {/* header components */}
      <Header />
      {/* reused navbar */}
      <NavbarApp />
      <MDBContainer
        fluid
        className="p-5 mt-5 mx-auto bg-light shadow text-white"
      >
        <MDBRow>
          <div className="col-md-4 ms-0">
            <MDBCard>
              <MDBCardHeader className="bg-info">
                <h3 className="text-white fs-5">Select Category</h3>
              </MDBCardHeader>
              <MDBCardBody className="p-3 text-dark">
                {/* category components re-used here */}
                <Category />
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-8 ms-0">
            <MDBCard>
              <MDBCardHeader className="bg-primary">
                <h3 className="text-white">50% off on selected Items</h3>
              </MDBCardHeader>
              <MDBCardBody className="p-3 text-dark">
                {/* fetch all data of course */}
                <MDBRow>
                  {CourseData &&
                    CourseData.map((items) => {
                      return (
                        <>
                          <div className="col-md-5 ms-5 shadow p-5 mt-5">
                            <p className="text-left w-100 h-50">
                              <img
                                src={items.photo}
                                alt="photo"
                                className="img-fluid"
                                style={{ width: '200px', height: '200px' }}
                              />
                            </p>

                            <p className="fs-6">{items.name}</p>
                            <p className="fs-5">{items.Fee}</p>
                            <p className="fs-5">{items.duration}</p>
                            <MDBBtn className="btn btn-sm btn-danger text-white fs-6">
                              AddToCart
                            </MDBBtn>
                          </div>
                        </>
                      );
                    })}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
