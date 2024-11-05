import React from 'react'
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
function Footer() {
  return (
    <div className='bg-dark bg-color'>
      <Container>
        <Row>
            <Col xs={12} md={3} className='d-flex flex-column gap-3'>
            <h3>Our Store</h3>
            <div>Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups.</div>
            <div className='d-flex gap-3 fs-2'>
                <span><FaFacebookSquare/></span><span><FaSquareXTwitter/></span><span><FaSquareInstagram/></span><span><FaSquarePinterest/></span>
            </div>
            </Col>
            <Col xs={12} md={3} className='d-flex flex-column gap-2  my-3 my-md-0'>
            <h3>Quick links</h3>
            <a href='' className='text-decoration-none'>
                <div>My account</div>
            </a>
            <a href='' className='text-decoration-none'>
                <div>Shopping Cart</div>
            </a>
            <a href='' className='text-decoration-none'>
                <div>Wishlist</div>
            </a>
            <a href='' className='text-decoration-none'>
                <div>Product Compare</div>
            </a>
            </Col>
            <Col xs={12} md={3} className='d-flex flex-column gap-2'>
            <h3>Information</h3>
            <a href='' className='text-decoration-none'>
                <div>My account</div>
            </a>
            <a href='' className='text-decoration-none'>
                <div>Shopping Cart</div>
            </a>
            <a href='' className='text-decoration-none'>
                <div>Wishlist</div>
            </a>
            <a href='' className='text-decoration-none'>
                <div>Product Compare</div>

            </a>
            </Col>
            <Col xs={12} md={3} className='d-flex flex-column gap-3 mt-3 mt-md-0'>
            <h2>Let’s get in touch</h2>
            <div>Sign up for our newsletter and receive 10% off your</div>
            <input placeholder='Enter Your Email Address..' className='p-2 w-100 rounded-1' />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
