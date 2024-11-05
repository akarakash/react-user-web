import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircleUser } from "react-icons/fa6";
import logo from '../images/logo-2.webp'
import { Link } from 'react-router-dom';
function Navbarr() {
  return (
    <div className='mb-5'>
      
      <Navbar expanded="lg" bg="light" data-bs-theme="light" className='py-3 fixed-top w-100'>
        <Container>
       <Link to={'/'} className="text-decoration-none" > <img className='logo1' src={logo}/></Link>
          <Nav className="m-auto fs-5">
            <Nav.Link href="/" className='active '>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
          <Navbar.Brand href="#home" className='fs-3'> 
            <Link to={'/form'} className="text-decoration-none">
            <FaCircleUser /> Login
            </Link>
             </Navbar.Brand> 
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbarr
