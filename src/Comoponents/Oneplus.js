import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbarr from './Navbarr';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import wall from "../image-2/oneplus-333.jpg";
import pic1 from "../image-2/oneplus-2.jpeg";
import pic2 from "../image-2/oneplus-34.webp";
import pic3 from "../image-2/oneplus-44.jpeg";
import { useEffect,useState } from 'react';
import axios from 'axios';
import one1 from "../image-2/one plus-1.png";


import { Row, Col } from "react-bootstrap";
import Footer from './Footer';
import { MdOutlineLocalOffer } from "react-icons/md";

function OnePlus() {
  const giturl ="https://raw.githubusercontent.com/akarakash/react-user-web/refs/heads/main/src/image-2/"

  const [value, setValue] =useState([]);
    useEffect(()=>{
      GetData();
    },[])
    const GetData = () => {
      axios.get("https://670e4b65073307b4ee464347.mockapi.io/product-api")
        .then(response => setValue(response.data))
        .catch(error => {
          console.error("Error fetching data:", error);
          
        });
    };
         
        const filterdata =value.filter((item)=>item.brand == "oneplus")
         console.log(filterdata);
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
          {filterdata.map((item)=>
          <Col xs={12} md={3}>
          <div>
              <Card style={{ width: "100%" }} className='mt-4'>
                <Card.Img variant="top" src={giturl+item.image}  className='img' style={{height:'300px'}}/>
                <Card.Body>
                  <Card.Title className="fs-3">{item.name}</Card.Title>
                  <Card.Text>
                  <h5>$ {item.price}</h5>
                  <div>Resolution: 450x550</div>

                  </Card.Text>
                  <Button className="bg-danger border-danger">
                  Buy Now
                  </Button>
                </Card.Body>
              </Card>
          </div>
        </Col>
          )}
        

        </Row>
      </div>
     </Container>
</div>
  )
}

export default OnePlus


