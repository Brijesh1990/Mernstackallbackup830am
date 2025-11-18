import React from 'react'
import { Container,Navbar,Nav,Button,NavbarBrand } from 'react-bootstrap'
export default function NavbarApp(props) {
  return (
    <div>
    <Nav className='nav navbar bg-dark'>
        <NavbarBrand className="ms-5 fs text-white fs-3">{props.logo ?`${props.logo}`:''}</NavbarBrand>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Kids Items</a></li>
            <li><a href=''>Womens Items</a></li>
            <li><a href=''>Electronics</a></li>
            <li><a href=''>Kicthen Items</a></li>
            <li><a href=''>{props.offer ? `${props.offer}`:''}</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
    </Nav>
      
    </div>
  )
}
