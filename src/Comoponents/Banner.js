import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../image-2/iphonebanner1.jpg"
import banner2 from "../image-2/vivobanner2.jpg"
import banner3 from "../image-2/wallimg4.jpg"
function Banner() {
  // const [index, setIndex] = useState(0);
  // const [data, setData] = useState([]);
  // const [banner, setBanner] = useState([]);
  
  // const GitUrl =
  //   "https://raw.githubusercontent.com/akarakash/react-user-web/refs/heads/main/src/image-2/";

  // useEffect(() => {
  //   GetData(); // Fetch data on mount
  // }, []);

  // const GetData = () => {
  //   axios
  //     .get("https://670e4b65073307b4ee464347.mockapi.io/product-api")
  //     .then((response) => {
  //       const fetchedData = response.data;
  //       setData(fetchedData);  // Set data from API

  //       const filterData = fetchedData.filter((items) => items.brand === "all");
  //       setBanner(filterData);  // Set filtered banner data
  //     });
  // };

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);  // Update selected index
  // };

  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img src={banner1} style={{width:"100%", height:"90vh"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner2} style={{width:"100%", height:"90vh"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner3} style={{width:"100%" , height:"90vh"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;
