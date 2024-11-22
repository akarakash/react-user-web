import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import iPhone1 from "../image-2/iphone_14_PNG19.png";
import iPhone2 from "../image-2/iphone 13.jpeg";
import iPhone3 from "../image-2/iphone12.png";
import iPhone4 from "../image-2/iphone-SE.jpeg";
import vivo1 from "../image-2/vivo-1.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const apidata = [
  {
    id: "0",
    image: iPhone1,
    name: "I Phone 15 Pro Max",
    price: "$ 1199.00",
    category: "iphone",
    description:
      "128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 48MP + 12MP | 12MP Front Camera, A16 Bionic Chip, 6 Core Processor Processor",
  },
  {
    id: "1",
    image: iPhone2,
    name: "I Phone 14 ",
    price: "$ 859.88",
    category: "iphone",
    description:
      "128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 48MP + 12MP | 12MP Front Camera, A16 Bionic Chip, 6 Core Processor Processor",
  },
  {
    id: "2",
    image: iPhone3,
    name: "I Phone 13",
    price: "$ 799.00",
    category: "iphone",
    description:
      "128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 48MP + 12MP | 12MP Front Camera, A16 Bionic Chip, 6 Core Processor Processor",
  },
  {
    id: "3",
    image: iPhone4,
    name: "I Phone x",
    price: "$ 399.45",
    category: "iphone",
    description:
      "128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 48MP + 12MP | 12MP Front Camera, A16 Bionic Chip, 6 Core Processor Processor",
  },
  {
    id:"4",
    image: vivo1,
    name: "vivo y30",
    price: "$ 1199.00",
    category: "vivo",
    description:
      "128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 48MP + 12MP | 12MP Front Camera, A16 Bionic Chip, 6 Core Processor Processor",
  },
];
 

function Productsdetails() {
  const { id } = useParams();
  const [value, setValue] = useState([]);
  useEffect(() => {
    const filters = apidata.filter((item) => item.id == id);
    setValue(filters);
  }, []);
console.log(value);

  return (
    <>
      <Container>
        <Row style={{height:"70vh"}}>
          {value.map((items) => (
            <>
              <Col md={6}><img className="img-fluid" src={items.image}/></Col>
              <Col md={6} className="d-flex justify-content-start align-items-start flex-column mt-5 fs-5">
              <h5>
                  <strong>Name:</strong>
                  {items.name}
                </h5>
                <h5 className="text-danger">
                  <strong>price:</strong>
                  {items.price}
                </h5>
                <p>
                  <strong>category:</strong>
                  {items.category}
                </p>
                <p>
                  <strong>description:</strong>
                  {items.description}
                </p>
              </Col>
            </>
          ))} 
        </Row>
      </Container>
    </>
  );
}
export default Productsdetails;
