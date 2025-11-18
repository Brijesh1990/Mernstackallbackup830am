import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (
    <Nav className='nav navbar navbar-expand p-2 bg-dark'>
    <Link to="/" className='text-white ms-5'>Home</Link>
    <Link to="/about" className='text-white ms-2'>About</Link>
    </Nav>
  )
}
