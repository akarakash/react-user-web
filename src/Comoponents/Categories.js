import React from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import img4 from "../images/i phone img.jpg";
function Categories() {
  return (
    <div>
     <Container>
     <h1>MOBILE'S...</h1>
      <div>
        <Row>
        <Col xs={12} md={3}>
              <div>
                <a href="" className="text-decoration-none">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                      <Card.Title className="fs-3">i phone</Card.Title>
                      <Card.Text>
                        iPhone 15 is the newest top-of-the-line smartphone
                        lineup by Apple. There are four phones in the lineup –
                        iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and
                      </Card.Text>
                      <Button className="bg-danger border-danger">
                        See More
                      </Button>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </Col>

            <Col xs={12} md={3}>
              <div>
                <a href="" className="text-decoration-none">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                      <Card.Title className="fs-3">i phone</Card.Title>
                      <Card.Text>
                        iPhone 15 is the newest top-of-the-line smartphone
                        lineup by Apple. There are four phones in the lineup –
                        iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and
                      </Card.Text>
                      <Button className="bg-danger border-danger">
                        See More
                      </Button>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </Col>

            <Col xs={12} md={3}>
              <div>
                <a href="" className="text-decoration-none">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                      <Card.Title className="fs-3">i phone</Card.Title>
                      <Card.Text>
                        iPhone 15 is the newest top-of-the-line smartphone
                        lineup by Apple. There are four phones in the lineup –
                        iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and
                      </Card.Text>
                      <Button className="bg-danger border-danger">
                        See More
                      </Button>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </Col>

            <Col xs={12} md={3}>
              <div>
                <a href="" className="text-decoration-none">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                      <Card.Title className="fs-3">i phone</Card.Title>
                      <Card.Text>
                        iPhone 15 is the newest top-of-the-line smartphone
                        lineup by Apple. There are four phones in the lineup –
                        iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and
                      </Card.Text>
                      <Button className="bg-danger border-danger">
                        See More
                      </Button>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </Col>
        </Row>
      </div>
     </Container>
    </div>
  )
}

export default Categories;
