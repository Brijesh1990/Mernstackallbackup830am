import React from 'react';
import { Chart } from 'react-google-charts';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export default function Dashboard() {
  // const DataHandele = () => {};
  // pie chart
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];

  const options = {
    title: 'My Daily Activities',
  };
  return (
    <>
      <div className="col-md-10 p-5 vh-100">
        <h2>Dashboard</h2>
        {/* create a card */}
        <MDBRow>
          <div className="col-md-3 bg-black text-white p-4 m-2">
            <h3>Total Customers</h3>
            <h3 className="text-center">
              <span className="badge badge-sm bg-danger text-white">10</span>
            </h3>
          </div>

          <div className="col-md-3 bg-success text-white p-4 m-2 ms-5">
            <h3>Total Customers</h3>
            <h3 className="text-center">
              <span className="badge badge-sm bg-danger text-white">10</span>
            </h3>
          </div>

          <div className="col-md-3 bg-primary text-white p-4 m-2 ms-5">
            <h3>Total Customers</h3>
            <h3 className="text-center">
              <span className="badge badge-sm bg-danger text-white">10</span>
            </h3>
          </div>

          {/* react js graph */}
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={'100%'}
            height={'400px'}
          />
        </MDBRow>
      </div>
    </>
  );
}
