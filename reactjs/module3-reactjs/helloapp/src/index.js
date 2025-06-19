// React js 15.0 or 16.0 or 17.0
// import React from "react";
// import ReactDOM from 'react-dom/client'

// const root=ReactDOM.createRoot(document.getElementById("demo"));
// root.render(

//     // fragments are defined in react for access multiple html elements 
//     // <> </>  or <React.Fragment></React.Fragment>  or <div></div>
//     // every tags are paired and react js is follow <xhtml> rules 

//     <>
//         <h1 align='center'>Hi my name is Brijesh</h1>
//         <hr />
//         <h2 align='center'>Hi my name is Vinay</h2>
//         <hr />
//     </>
// );


// //React js 19.0.0
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";
// const root=createRoot(document.getElementById("demo"));
// // const nm="vinay";
// // let nm="vinay"
// // const a=10;
// // const b=20;
// // const c=a+b;

// const a=parseInt("10"); //typeCasting rules
// const b=20;
// const c=a+b;
// root.render(

//     <StrictMode>
//      {/* <h1>Hey vinay</h1>
//      <h3>Hey Heet</h3>         */}
//      {/* <h1>Hi my name is :{nm}</h1> */}
//      <h1>Additions of numbers is :{c}</h1>
//     </StrictMode>

// )



// components re-usables
// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./components/App";
// const root=createRoot(document.getElementById("demo"));
// root.render(
//     <StrictMode>
//     {/* components re-usability */}
//     <App />
//     </StrictMode>
// )



// create a simple layout webpages 
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./LayoutApp";
import './assets/css/style.css'
const root=createRoot(document.getElementById("demo"));
root.render(
    <StrictMode>
    {/* used components */}
    <Layout />
    </StrictMode>
)