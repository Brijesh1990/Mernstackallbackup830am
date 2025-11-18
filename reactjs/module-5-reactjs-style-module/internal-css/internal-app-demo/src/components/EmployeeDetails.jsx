import React from 'react';
const name = 'Brijesh';
const age = 35;
const edu = 'Mtech(IT)';
const dept = 'IT';
const pin = 360005;
const address = '150 feet ring road rajkot';
export default function EmployeeApp() {
  return (
    <>
      <div className="app">
        <h1>
          Hi {name} <br /> you are now : {age} years old <br /> congrates done :{' '}
          {edu} <br /> yes i thing you are in : {dept} <br /> you are still live
          in : {pin} <br /> i forget your address but remmber you live in this :{' '}
          {address}{' '}
        </h1>
      </div>
    </>
  );
}
