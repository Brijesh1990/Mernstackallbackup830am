import React from 'react';
import { MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
export default function Content() {
  return (
    <>
      {/* sliders & content */}
      <MDBContainer>
        <MDBRow>
          <div className="col-md-6 banner-txt p-3 mt-3">
            <h1>
              India’s only BCA with a job after first year +{' '}
              <span className="text-primary">Certifications Included</span>
            </h1>
          </div>
          <div className="col-md-6 p-3 mt-3">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000,fit=scale-down,f=auto,q=100/https://statics.myclickfunnels.com/workspace/vnBgwv/image/13250020/file/178353fe8944bf7d99036a9acf44e325.png"
              className="img-fluid"
            />
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
