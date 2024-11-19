import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbarr from './Navbarr';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import wall from "../images/oneplus-333.jpg";
import pic1 from "../images/oneplus-2.jpeg";
import pic2 from "../images/oneplus-34.webp";
import pic3 from "../images/oneplus-44.jpeg";

import one1 from "../image-2/one plus-1.png";
import one2 from "../image-2/one plus-2.jpeg";
import one3 from "../image-2/one plus-3.jpeg";
import one4 from "../image-2/one plus-4.jpeg";

import { Row, Col } from "react-bootstrap";
import Footer from './Footer';
import { MdOutlineLocalOffer } from "react-icons/md";

function OnePlus() {
  return (
    <div>
    <div>
        <img className='w-100 wall' src={wall}/>
     </div>
     <div className='bg-vivo'>
     <Container>
    <Row className='py-5'>
        <Col md={4}>
       <div className='text-center my-5'>
       <h2>Your new OnePlus</h2>
       <h2>awaits. Make it yours.</h2>
       </div>
        <img className='w-100 rounded-5' src={pic1}/>
        </Col>
        <Col md={4}>
        <div className='fs-5 text-center instant'>
        From ₹2999.00/mo. with instant cashback and No Cost EMI§Footnote or ₹28900.00Footnote‡</div>
        </Col>
        <Col md={4}>
        <h2 className='text-center my-5'>What’s in the Box</h2>
        <div className=''>
        <img className='w-100 rounded-3' src={pic2}/>
        <h4 className='text-colors my-3'>10% OFF <MdOutlineLocalOffer/>  </h4>
        <img className='w-100 rounded-3' src={pic3}/>

        </div>
        </Col>
    </Row>
  </Container>
     </div>
     <Container>
     <h2>Products..</h2>
     <div className='my-5'>
        <Row>
        <Col xs={12} md={3}>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={one1}  className='img' style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">OnePlus 11 </Card.Title>
                      <Card.Text>
                      <h5>$ 599.00</h5>
                      <div>Resolution: 450x550</div>

                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3} className='my-3 my-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={one2}  className='img'  style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">OnePlus 10 pro</Card.Title>
                      <Card.Text>
                      <h5>$ 499.00</h5>
                      <div>Resolution: 430x550</div>

                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3}>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={one3}  className='img'  style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">OnePlus 9</Card.Title>
                      <Card.Text>
                      <h5>$ 759.34</h5>
                      <div>Resolution: 530x650</div>
                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3} className='mt-3 mt-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={one4}  className='img' style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">OnePlus 7 pro</Card.Title>
                      <Card.Text>
                      <h5>$ 199.42</h5>
                      <div>Resolution: 630x750</div>
                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
               
              </div>
            </Col>
        </Row>
      </div>
     </Container>
</div>
  )
}

export default OnePlus


