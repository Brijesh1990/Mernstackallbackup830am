 import React from "react";
//  const name="My name is Brijesh";
//  function App()
//  {
//     return <h1>{name}</h1>
//  }
//  export default App

const name="Brijesh";
const address="150 feet ring road rajkot";
function App()
{
   return(
    // <>
    //     <h1>My name is :{name}</h1>
    //     <h1>Address is :{address}</h1>
    // </>

    // <div>
    // <h1>My name is :{name}</h1>
    // <h1>Address is :{address}</h1>
    // </div>

    <React.Fragment>
    <h1>My name is :{name}</h1>
    <h1>Address is :{address}</h1>
    </React.Fragment>
   )
}
export default App