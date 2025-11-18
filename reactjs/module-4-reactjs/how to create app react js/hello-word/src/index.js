import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// single html render

// const root = createRoot(document.getElementById('demo'));
// root.render(
//   <StrictMode>
//     <h1>Hello world</h1>
//   </StrictMode>
// );

// const root = createRoot(document.getElementById('demo'));
// root.render(
//   <StrictMode>
//     <div>
//       <h1>Hi my name is Brijesh</h1>
//       <p>Hi This is React js</p>
//     </div>
//   </StrictMode>
// );

// const root = createRoot(document.getElementById('demo'));
// root.render(
//   <>
//     <h1>Hey Brijesh</h1>
//     <p>Hi i am fine</p>
//   </>
// );

// const root = createRoot(document.getElementById('demo'));
// root.render(
//   <React.Fragment>
//     <h1>Hey Brijesh</h1>
//     <p>Hi i am fine</p>
//   </React.Fragment>
// );

// calculations
// const a = 15;
// const b = 25;
// const c = a + b;
// const d = a * b;
// const e = a / b;
// const f = a - b;
// const root = createRoot(document.getElementById('demo'));
// root.render(
//   <React.Fragment>
//     <h1>Additions of numbers is : {c}</h1>
//     <h1>Multiplcations of numbers is : {d}</h1>
//     <h1>Divisions of numbers is : {e}</h1>
//     <h1>Substractions of numbers is : {f}</h1>
//   </React.Fragment>
// );

// inline style
const a = 15;
const b = 25;
const c = a + b;
const d = a * b;
const e = a / b;
const f = a - b;
const root = createRoot(document.getElementById('demo'));
root.render(
  <React.Fragment>
    <div
      style={{
        width: '60%',
        height: 'auto',
        margin: 'auto',
        padding: '25px',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '5%',
      }}
    >
      <h1>Additions of numbers is : {c}</h1>
      <h1>Multiplcations of numbers is : {d}</h1>
      <h1>Divisions of numbers is : {e}</h1>
      <h1>Substractions of numbers is : {f}</h1>
    </div>
  </React.Fragment>
);
