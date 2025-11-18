import React from "react";
import NavbarApp from "./NavbarApp";
import Content from "./Content";
import { Navbar } from "react-bootstrap";
function App(props)
{
  return(
    <>
      {/* access data via props in components */}
      {/* <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.address}</h3>
      <h4>{props.salary}</h4>
      <h5>{props.department}</h5>
      <h5>{props.hobbies}</h5> */}
      <NavbarApp logo="Groffers App" offer="Offer Zone"  />
      <Content  discount="50%"  categories={["Kids Items","Mens Items","Womens Items","Electronics","Mobiles Items","Mobile assesories","Kitchenware","Fruits","Punjabi Thali","Gujrati thali","Chinease","chinease soup"]}/>


    </>
  )
}

export default App