import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from '../../../Image/Slider/1.jpg'
import slider2 from '../../../Image/Slider/2.png'
import slider3 from '../../../Image/Slider/3.jpg'
import slider4 from '../../../Image/Slider/4.jpg'

const Home = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
