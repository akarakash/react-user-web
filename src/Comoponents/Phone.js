import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import iPhone1 from "../image-2/iphone_14_PNG19.png";
import iPhone2 from "../image-2/iphone-SE.jpeg";
import iPhone3 from "../image-2/iphone22.avif";
import iPhone4 from "../image-2/iphone...webp";
import vivo1 from "../image-2/vivo-1.jpeg"
import vivo2 from "../image-2/vivo-2.jpeg";
import vivo3 from "../image-2/vivo-4.jpeg";
import vivo4 from "../image-2/vivo-4.jpeg";
import axios from 'axios';
import one1 from "../image-2/one plus-1.png";
import one2 from "../image-2/one plus-2.jpeg";
import one3 from "../image-2/one plus-3.jpeg";
import one4 from "../image-2/one plus-4.jpeg";

import { FaShippingFast } from "react-icons/fa";
import { RiTyphoonLine } from "react-icons/ri";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import Reactplayer from './Reactplayer';

function Phone() {
    const giturl ="https://raw.githubusercontent.com/akarakash/react-user-web/refs/heads/main/src/image-2/"

    const [image, setImage] = useState([]);

    useEffect(() => {
      GetData();
    }, []);
  
    const GetData = () => {
      axios
        .get("https://670e4b65073307b4ee464347.mockapi.io/product-api")
        .then((response) => {
  
          const iphone1 = response.data.filter((a) => a.id === "1");
          const iphone2 = response.data.filter((a) => a.id === "2");
          const iphone3 = response.data.filter((a) => a.id === "3");
          const iphone4 = response.data.filter((a) => a.id === "4");
          const vivo1= response.data.filter((a) => a.id === "8");
          const vivo2 = response.data.filter((a) => a.id === "9");
          const vivo3 = response.data.filter((a) => a.id === "10");
          const vivo4 = response.data.filter((a) => a.id === "11");
          const oneplus1 = response.data.filter((a) => a.id === "16");
          const oneplus2  = response.data.filter((a) => a.id === "17");
          const oneplus3  = response.data.filter((a) => a.id === "18");
          const oneplus4 = response.data.filter((a) => a.id === "19");
  
          setImage([...iphone1, ...iphone2, ...iphone3, ...iphone4, ...vivo1, ...vivo2, ...vivo3, ...vivo4, ...oneplus1, ...oneplus2, ...oneplus3, ...oneplus4]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    
  return (
    <div>
       <div>
     <Container>
     <h1>MOBILE'S...</h1>
      <div className='my-5'>
        <div className='fs-3 fw-bold my-2'>Apple..</div>
        <Row>
        {image.map(item=>
            <Col xs={12} md={3}>
            <div>
                <Card  style={{ width: "100%" }}className='mt-4'>
                  <Card.Img variant="top" src={giturl + item.image} className='img'  style={{height:'300px'}}/>
                  <Card.Body>
                    <Card.Title className="fs-3">{item.name} </Card.Title>
                    <Card.Text>
                      <h5>${item.price}</h5>
                    <div>Resolution: 830x950</div>

                    </Card.Text>
                    <Button className="bg-danger border-danger">
                    Buy Now
                    </Button>
                  </Card.Body>
                </Card>
            </div>
          </Col>
        )}

            {/* <Col xs={12} md={3} className='my-3 my-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={iPhone2}  className='img'  style={{height:'300px'}}/>
                    <Card.Body>
                      <Card.Title className="fs-3">i phone 13</Card.Title>
                      <Card.Text>
                      <h5>$ 799.00</h5>
                      <div>Resolution: 730x880</div>

                      </Card.Text>
                     <Link to={'/form'}>
                     <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                     </Link>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3}>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={iPhone3}  className='img'  style={{height:'300px'}}/>
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

            <Col xs={12} md={3} className='mt-3 mt-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={iPhone4}  className='img'  style={{height:'300px'}}/>
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
            </Col> */}
        </Row>
      </div>
      
      {/* vivo */}
      {/* <div className='my-5'>
      <div className='fs-3 fw-bold my-2'>vivo..</div>

        <Row>
        <Col xs={12} md={3}>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={vivo2}  className='img' style={{height:'300px'}}/>
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
                    <Card.Img variant="top" src={vivo3}  className='img'  style={{height:'300px'}}/>
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
                    <Card.Img variant="top" src={vivo4}  className='img'  style={{height:'300px'}}/>
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

            <Col xs={12} md={3} className='mt-3 mt-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={vivo1}  className='img'  style={{height:'300px'}}/>
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
      </div> */}
      {/* Oneplus */}
      {/* <div className='my-5'>
      <div className='fs-3 fw-bold my-2'>Oneplus..</div>
        <Row>
        <Col xs={12} md={3}>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={one1}  className='img'  style={{height:'300px'}}/>
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

            <Col xs={12} md={3} className='my-3 my-md-0'>
              <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={one4}  className='img'  style={{height:'300px'}}/>
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
      </div> */}
      <div className='my-5 py-3'>
        <Row>
          <Col xs={12} md={3}>
          <div className='d-flex'>
            <div className='rownd-icon'>
           <span className='justify-content-center d-flex fs-1 pt-3'> <FaShippingFast/></span>
            </div>
            <h5 className='mt-4 mx-3' >Free Shipping...</h5>
          </div>
          </Col>
          <Col xs={12} md={3} className='my-3 my-md-0'>
          <div className='d-flex'>
            <div className='rownd-icon'>
           <span className='justify-content-center d-flex fs-1 pt-3'> <RiMoneyEuroCircleFill/></span>
            </div>
            <h5 className='mt-4 mx-3' >Money Guarantee...</h5>
          </div>
          </Col>
          <Col xs={12}  md={3}>
          <div className='d-flex'>
            <div className='rownd-icon'>
           <span className='justify-content-center d-flex fs-1 pt-3'> <RiTyphoonLine /></span>
            </div>
            <h5 className='mt-4 mx-3' >Online Support...</h5>
          </div>
          </Col>
          <Col xs={12} md={3} className='my-3 my-md-0'>
          <div className='d-flex'>
            <div className='rownd-icon'>
           <span className='justify-content-center d-flex fs-1 pt-3'> <MdOutlinePayment /></span>
            </div>
            <h5 className='mt-4 mx-3' >Flexible Payment...</h5>
          </div>
          </Col>
        </Row>
      </div>
      <div>
        <Reactplayer/>
      </div>
     </Container>
    </div>
    </div>
  )
}

export default Phone
