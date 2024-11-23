import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import iPhone1 from "../image-2/iphone_14_PNG19.png";
import iPhone2 from "../image-2/iphone 13.jpeg";
import iPhone3 from "../image-2/iphone12.png";
import iPhone4 from "../image-2/iphone-SE.jpeg";
import vivo1 from "../image-2/vivo-1.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { responsiveFontSizes } from "@mui/material";
 

function Productsdetails() {
    const giturl ="https://raw.githubusercontent.com/akarakash/react-user-web/refs/heads/main/src/image-2/"
  const { id } = useParams();
  const [value, setValue] = useState([]);
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
console.log(value);

     const filterdata = value.filter((item)=>item.id == id)
     console.log(filterdata);
     

  return (
    <>
     <Container>
        <Row style={{height:"80vh"}}>
          {filterdata.map((items) => (
            <>
              <Col md={6}><img className="w-75" src={ giturl+items.image}/></Col>
              <Col md={6} className="d-flex justify-content-start align-items-start flex-column mt-5 fs-4">
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
                  {items.brand}
                </p>
                <p>
                  <strong>description:</strong>
                  {items.description}
                </p>
                <div>

                <button className="btn col"><strong className="bg-danger">BUY NOW`1</strong></button>
                <button className="btn "><strong>ADD DO Card</strong></button>
                </div>
              </Col>
            </>
          ))} 
        </Row>
      </Container>
    </>
  );
}
export default Productsdetails;
