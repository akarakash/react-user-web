import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircleUser } from "react-icons/fa6";
import logo from '../image-2/logo-1.jpg'
import { Link } from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
function Navbarr() {
  return (
    <div className='mb-5'>
      
      {/* <Navbar expanded="lg" bg="light" data-bs-theme="light" className='py-3 fixed-top w-100'>
        <Container>
       <Link to={'/'} className="text-decoration-none" > <img className='logo1' src={logo}/></Link>
          <Nav className="m-auto fs-5">

            <Nav.Link href="/" className='active '>Home</Nav.Link>
            <NavDropdown title="Brands" id="basic-nav-dropdown" className='hover'>
              <NavDropdown.Item href="/iphonePage">I phones</NavDropdown.Item>
              <NavDropdown.Item href="/vivopage">
                Vivo
              </NavDropdown.Item>
              <NavDropdown.Item href="/onePlus">OnePlus</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
          <Navbar.Brand href="#home" className='fs-3'> 
            <Link to={'/form'} className="text-decoration-none">
            <FaCircleUser /> <span className='fs-6'>Login</span>
            </Link>
             </Navbar.Brand> 
        </Container>
      </Navbar> */}
        

      <Navbar expand="lg" className="bg-body-tertiary py-3 fixed-top w-100">
      <Container fluid>
      <Link to={'/'} className="text-decoration-none" > <img className='logo1' src={logo}/></Link>
        <Navbar.Brand href="/">5G Mobiles..</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='active '>Home</Nav.Link>
            <NavDropdown title="Brands" id="basic-nav-dropdown" className='hover'>
              <NavDropdown.Item href="/apipage/1">I phones</NavDropdown.Item>
              <NavDropdown.Item href="/apipage/2">
                Vivo
              </NavDropdown.Item>
              <NavDropdown.Item href="/apipage/3">OnePlus</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Navbar.Brand href="#home" className='fs-3'> 
            <Link to={'/form'} className="text-decoration-none">
            <FaCircleUser /> <span className='fs-6'>Login</span>
            </Link>
             </Navbar.Brand>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr
