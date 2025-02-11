import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbarr from './Navbarr';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import wall from "../image-2/iphonepage33.jpg";
import pic1 from "../image-2/iphone-15-blue-select-202309_AV2.jpeg";
import pic2 from "../image-2/iphone-15-blue-witb-202309.jpeg";
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import Footer from './Footer';
function IphonePage() {
  const giturl ="https://raw.githubusercontent.com/akarakash/react-user-web/refs/heads/main/src/image-2/"
  const { id } = useParams();
  const navigate =useNavigate();

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
         
        const filterdata =value.filter((item)=>item.brand == "iphone")
         console.log(filterdata);

         const handleClick = (id) => {
          console.log(id);
          navigate(`/productsdetails/${id}`)
        };

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
     <h2 className='my-3'>Products..</h2>
     <div className='my-5'>
        <Row>
          {filterdata.map((item)=>
          <Col xs={12} md={3} className='mt-4' onClick={() => handleClick(item.id)}>
          <div>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={giturl+item.image}  className='img'  style={{height:'300px'}}/>
                <Card.Body>
                  <Card.Title className="fs-3">{item.name}</Card.Title>
                  <Card.Text>
                  <h5>$ {item.price}</h5>
                  <div>Resolution: 530x650</div>

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

export default IphonePage


