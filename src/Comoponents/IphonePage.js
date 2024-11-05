import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbarr from './Navbarr';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import wall from "../images/iphonepage33.jpg";
import pic1 from "../images/iphone-15-blue-select-202309_AV2.jpeg";
import pic2 from "../images/iphone-15-blue-witb-202309.jpeg";
import pic3 from "../images/iphone-15-cables-witb-202309.jpeg";

import iPhone1 from "../image-2/iphone_14_PNG19.png";
import iPhone2 from "../image-2/iphone3333.png";
import iPhone3 from "../image-2/iphone22.avif";
import iPhone4 from "../image-2/iphone-4.0.jpeg";


import { Row, Col } from "react-bootstrap";
import Footer from './Footer';

function IphonePage() {
  return (
    <div>
        <Navbarr/>
        <div>
            <img className='w-100 wall' src={wall}/>
         </div>
         <div className='bg-light'>
         <Container>
        <Row className='py-5'>
            <Col md={4}>
           <div className='text-center my-5'>
           <h2>Your new iPhone</h2>
           <h2>awaits. Make it yours.</h2>
           </div>
            <img className='w-100' src={pic1}/>
            </Col>
            <Col md={4}  className='mt-5 mt-md-0'>
            <div className='fs-5 text-center instant'>
            From ₹5492.00/mo. with instant cashback§§ and No Cost EMI§Footnote or ₹69900.00Footnote‡</div>
            </Col>
            <Col md={2}>
            <h2 className='text-center my-5'>What’s in the Box</h2>
            <div className='d-flex'>
            <img className='w-100' src={pic2}/>
            </div>
            </Col>
            <Col md={2}>
            <img className='w-100 mt-5 cable' src={pic3}/>
            </Col>
        </Row>
      </Container>
         </div>
         <Container>
         <div className='my-5'>
         <h2>Products..</h2>
        <Row>
        <Col xs={12} md={3}>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={iPhone1}  style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">i phone 15</Card.Title>
                      <Card.Text>
                        <h5>$ 1199.00</h5>
                      <div>Resolution: 830x950</div>

                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3}  className='my-3 my-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={iPhone2}   style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">i phone 13</Card.Title>
                      <Card.Text>
                      <h5>$ 799.00</h5>
                      <div>Resolution: 730x880</div>

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
                    <Card.Img variant="top" src={iPhone3}   style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">i phone 14</Card.Title>
                      <Card.Text>
                      <h5>$ 859.88</h5>
                      <div>Resolution: 730x850</div>

                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3}  className='mt-3 mt-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={iPhone4}   style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">i phone x</Card.Title>
                      <Card.Text>
                      <h5>$ 399.45</h5>
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
      <Footer/>
    </div>
  )
}

export default IphonePage
