import React,{useState} from "react";
import { Container,Button } from "react-bootstrap";
function App()
{
  // initialised state 
  const[count,setCount]=useState(0);
  //  count is an variables 
  //  setCount is a function 
  //  useState(0) is an hooks of state i.e used to intitialised state

  return(
    <>
        <Container fluid className="mt-5 p-5 w-50 bg-light mx-auto shadow content">
         <h1 className="text-center">The count values is : {count}</h1>
         <h4 className="text-center">
          <Button onClick={()=>{setCount(count+1)}}><span className="bi bi-plus fs-2 text-white"></span></Button>
          <Button className="ms-3" onClick={()=>{setCount(count-1)}}><span className="bi bi-file-minus fs-2 text-white"></span></Button>
      
         </h4>
        </Container>
    </>
  )
}
export default App