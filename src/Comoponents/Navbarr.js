  import React from 'react';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { FaCircleUser } from "react-icons/fa6";
  import logo from '../image-2/logo-1.jpg';
  import { Link } from 'react-router-dom';
  import NavDropdown from "react-bootstrap/NavDropdown";
  import Form from 'react-bootstrap/Form';

  function Navbarr() {
    return (
      <div>
        {/* Fixed Navbar */}
        <Navbar expand="lg" className="bg-body-tertiary py-3 sticky-top w-100 fs-5">
          <Container fluid>
            <Link to={'/'} className="text-decoration-none">
              <img className='logo1' src={logo} alt="Logo" />
            </Link>
            <Navbar.Brand href="/">5G Mobiles..</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/" className='active'>Home</Nav.Link>
                <NavDropdown title="Brands" id="basic-nav-dropdown" className='hover'>
                  <NavDropdown.Item href="/iphonePage">I phones</NavDropdown.Item>
                  <NavDropdown.Item href="/vivopage">Vivo</NavDropdown.Item>
                  <NavDropdown.Item href="/onePlus">OnePlus</NavDropdown.Item>
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
                  className="me-4"
                  aria-label="Search"
                />
              </Form>
              <Navbar.Brand href="#home" className='fs-3'>
                <Link to={'/login'} className="text-decoration-none">
                  <FaCircleUser /> <span className='fs-4'>Login</span>
                </Link>
              </Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Content Area with margin for fixed navbar */}
        {/* <div style={{ marginTop: '80px' }}>
          <h1>Welcome to 5G Mobiles!</h1>
          <p>This is some content below the fixed navbar.</p>
        </div> */}
      </div>
    );
  }

  export default Navbarr;
