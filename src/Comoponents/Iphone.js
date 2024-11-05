import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import iphinepic from "../images/iphone---12.jpeg";
import vivo from "../images/vivo----pic2.jpg";
import one from "../images/oneplus----3.jpeg";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

function Iphone() {
  return (
    <div className="py-5 my-5">
      <Container>
        <Row>
          <Col md={2}>
            <img className="w-100 " src={iphinepic} />
          </Col>
          <Col md={2}>
            <img className="w-100 " src={vivo} />
          </Col>
           <Col md={2}>
            <img className="w-100 " src={one} />
          </Col>
          <Col xs={12} md={6} className="mt-4 mt-md-0">
          <h4 className="offer"> 11% OFF <BiSolidOffer/></h4 >
            <div className="d-flex flex-column  text-center justify-content-center align-items center h-100">
              <div className="text-end">
              <h4 className="vivo"> 5% OFF<MdOutlineLocalOffer/></h4>
              <h2>IPHONE 15</h2>
              <h5>₹99,999 before exchange</h5>
              <h6 className="text-muted ">128GB, 256GB, 1TB 6GB RAM</h6>
              </div>
              <div className="my-3 my-md-0">
              <h4 className="vivo"> 9% OFF<MdOutlineLocalOffer/></h4>
              <h2>OnePlus 12R</h2>
              <h5>₹37,999 before exchange</h5>
              <h6 className="text-muted ">128GB, 256GB, 1TB 6GB RAM</h6>
              </div>
              <div className="text-start">
              <h4 className="vivo">11% OFF<MdOutlineLocalOffer/></h4>
              <h2>vivo v27</h2>
              <h5>₹29,999 before exchange</h5>
              <h6 className="text-muted ">128GB, 256GB, 1TB 6GB RAM</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Iphone;
