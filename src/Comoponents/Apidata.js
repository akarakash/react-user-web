import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import iphonebanner from "../images/iphonepage33.jpg";
import iPhone1 from "../image-2/iphone_14_PNG19.png";
import iPhone2 from "../image-2/iphone3333.png";
import iPhone3 from "../image-2/iphone22.avif";
import iPhone4 from "../image-2/iphone-4.0.jpeg";
import vivobanner from "../images/vivopage-1.jpg";
import vivo1 from "../image-2/vivo-1.jpeg";
import vivo2 from "../image-2/vivo-2.jpeg";
import vivo3 from "../image-2/vivo-3.jpeg";
import vivo4 from "../image-2/vivo-4.jpeg";
import wall from "../images/oneplus-333.jpg";
import one1 from "../image-2/one plus-1.png";
import one2 from "../image-2/one plus-2.jpeg";
import one3 from "../image-2/one plus-3.jpeg";
import one4 from "../image-2/one plus-4.jpeg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import data from "./data";
const api = [
  {
   "id": "1",
   "name": "I Phone",
   "banner": iphonebanner,
    "title": "iphone is nice  to use",
    "products": [
      {
        image: iPhone1,
        name: "I Phone 15 Pro Max",
        price: "$ 1199.00",
        category: "iphone",
      },
      {
        image: iPhone2,
        name: "I Phone 14 ",
        price: "$ 859.88",
        category: "iphone",
      },
      {
        image: iPhone3,
        name: "I Phone 13",
        price: "$ 799.00",
        category: "iphone",
      },
      {
        image: iPhone4,
        name: "I Phone x",
        price: "$ 399.45",
        category: "iphone",
      },
    ],
  },
  {
    "id": "2",
    "name": "Vivo",
    banner: vivobanner,
    "title": "vivo is nice  to use",
    "products": [
      {
        image: vivo1,
        name: "vivo y30",
        price: "$ 1199.00",
        category: "vivo",
      },
      {
        image: vivo2,
        name: "vivo v27",
        price: "$ 859.88",
        category: "vivo",
      },
      {
        image: vivo3,
        name: "vivo 25",
        price: "$ 799.00",
        category: "vivo",
      },
      {
        image: vivo4,
        name: "vivo y100",
        price: "$ 399.45",
        category: "vivo",
      },
    ],
  },
  {
        
    "id": "3",
    "name": "oneplus",
    banner: wall,
    "title": "oneplus is nice  to use",
    "products": [
      {
        image: one1,
        name: "oneplus nortEC3 Lite",
        price: "$ 1199.00",
        category: "oneplus",
      },
      {
        image: one2,
        name: "oneplus 7",
        price: "$ 859.88",
        category: "oneplus",
      },
      {
        image: one3,
        name: "oneplus 8pro",
        price: "$ 799.00",
        category: "oneplus",
      },
      {
        image: one4,
        name: "oneplus 9",
        price: "$ 399.45",
        category: "oneplus",
      },
    ],
  },
];

function Apidata() {
  const [name, setName] = useState("");
  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("");
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const vivo = api.filter((item) => item.id ==id);
    console.log(vivo);

    setName(vivo[0].name);
    setBanner(vivo [0].banner);
    setTitle(vivo [0].title);
    setProducts(vivo [0].products);

    console.log(products);
    
  }, []);

  return(
    <div>
      <img
          style={{ height: '80vh' }}
          className='w-100 d-block vh-50'
          src={banner}
          alt=''
        />
         <h2 className='mt-5'><i>{title ? title : 'NO data'}</i></h2>
        <Container>
        <Row>
  {products.length === 0 ? (
    <Col>
      <p>No products available</p>
    </Col>
  ) : (
    products.map((product, index) => (
      <Col md={6} lg={3} key={index}>
       <Card style={{ width: "250px", height: "" }}>
                    <Card.Img variant="top" src={product.image}  className='w-100' style={{height:'auto'}}/>
                    <Card.Body>
                      <Card.Title className="fs-5">{product.name}</Card.Title>
                      <Card.Text>
                        <h5>{product.price}</h5>
                        <Card.Text>{product.category}</Card.Text>
                      </Card.Text>
                      <Button className="bg-danger border-danger">
                      Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
      </Col>
    ))
  )}
</Row>
        </Container>

    </div>
  );
}

export default Apidata;
