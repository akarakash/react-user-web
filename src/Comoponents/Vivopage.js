import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbarr from './Navbarr';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import wall from "../images/vivopage-1.jpg";
import pic1 from "../images/vivopage-2.jpeg";
import pic2 from "../images/vivopage-3.jpeg";

import vivo1 from "../image-2/vivo-1.jpeg";
import vivo2 from "../image-2/vivo-2.jpeg";
import vivo3 from "../image-2/vivo-3.jpeg";
import vivo4 from "../image-2/vivo-4.jpeg";

import { Row, Col } from "react-bootstrap";
import Footer from './Footer';
function Vivopage() {
  return (
    <div>
    <Navbarr/>
    <div>
        <img className='w-100 wall' src={wall}/>
     </div>
     <div className='bg-vivo'>
     <Container>
    <Row className='py-5'>
        <Col md={4}>
       <div className='text-center my-5'>
       <h2>Your new vivo</h2>
       <h2>awaits. Make it yours.</h2>
       </div>
        <img className='w-100 rounded-5' src={pic1}/>
        </Col>
        <Col md={4}>
        <div className='fs-5 text-center instant'>
        From ₹3492.00/mo. with instant cashback and No Cost EMI§Footnote or ₹32900.00Footnote‡</div>
        </Col>
        <Col md={4}>
        <h2 className='text-center my-5'>What’s in the Box</h2>
        <div className='d-flex'>
        <img className='w-100' src={pic2}/>
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
                    <Card.Img variant="top" src={vivo1}  style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">vivo x100</Card.Title>
                      <Card.Text>
                      <h5>$ 450.34</h5>
                      <div>Resolution: 530x650</div>

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
                    <Card.Img variant="top" src={vivo2}   style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">vivo v29</Card.Title>
                      <Card.Text>
                      <h5>$ 399.00</h5>
                      <div>Resolution: 630x750</div>

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
                    <Card.Img variant="top" src={vivo3}   style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">vivo Y17</Card.Title>
                      <Card.Text>
                      <h5>$ 359.35</h5>
                      <div>Resolution: 730x850</div>

                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3} className='mt-3 mt-my-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={vivo4}   style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">vivo V25e</Card.Title>
                      <Card.Text>
                      <h5>$ 245.23</h5>
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

export default Vivopage


