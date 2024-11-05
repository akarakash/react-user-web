import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/wallimg1.jpg';
import img2 from '../images/wallimg2.jpg';
import img3 from '../images/wallimg4.jpg';

function Banner() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{height:'90vh'}}
        className='d-block w-100'
        src={img1}
        alt='first slide'
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}}
        className='d-block w-100'
        src={img2}
        alt=''
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}}
        className='d-block w-100'
        src={img3}
        alt=''
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner;
