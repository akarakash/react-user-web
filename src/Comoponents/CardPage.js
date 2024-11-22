import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img4 from "../image-2/i phone img.jpg";
import img5 from "../image-2/vivo-x100-teaser-1.jpg";
import img6 from "../image-2/OnePlus-11-Review-AM-AH-26.jpg";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'
import "../Carousel.css"

function CardPage() {
  return (
    <div>
      <Container>
        <h1 className="text-center my-5">Shop by Categories..</h1>
        <div className=" my-4">
          <Row>
            <Col xs={12} md={4} className="my-3 my-md-0 ">
               <Link to={'/iphonepage'} className="text-decoration-none">
               <a href="" className="text-decoration-none">
                  <Card  className="card1"  style={{ width: "100%" }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                      <Card.Title className="fs-3">i phone</Card.Title>
                      <Card.Text>
                        iPhone 15 is the newest top-of-the-line smartphone
                        lineup by Apple. There are four phones in the lineup –
                        iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and
                        lineup by Apple. There are four phones in the lineup –
                      </Card.Text>
                   
                    </Card.Body>
                  </Card>
                </a>
               </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to={'/vivopage'} className="text-decoration-none">
                <a href="" className="text-decoration-none">
                  <Card className="card1" style={{ width: "100%" }}>
                    <Card.Img variant="top" src={img5} />
                    <Card.Body>
                      <Card.Title className="fs-3">Vivo</Card.Title>
                      <Card.Text>
                        Vivo Electronics Corp. is a phone brand based in
                        Dongguan, Guangdong, China. It was founded in 2009. The
                        company is another Chinese smartphone maker to
                        entersmartphones with cutting-edge
                      </Card.Text>
                   
                    </Card.Body>
                  </Card>
                </a>
                </Link>
            </Col>

            <Col xs={12} md={4}  className="my-3 my-md-0 ">
                <Link to={'/onePlus'} className="text-decoration-none">
                <a href="" className="text-decoration-none">
                  <Card  className="card1" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={img6}
                      style={{ height: "224px" }}
                    />
                    <Card.Body>
                      <Card.Title className="fs-3">Oneplus</Card.Title>
                      <Card.Text>
                        OnePlus recently teased the colour options of the
                        upcoming OnePlus 12 smartphone model. Now, the company
                        has revealed detailed camera specs of thecaptured in
                        32MP and it's one of the better
                      </Card.Text>
                     
                    </Card.Body>
                  </Card>
                </a>
                </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default CardPage;
