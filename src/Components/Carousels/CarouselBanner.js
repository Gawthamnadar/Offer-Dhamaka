import React from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
import Img1 from "../../Assets/Carousel Images/slide 1.jpg";
import Img2 from "../../Assets/Carousel Images/slide 2.jpeg";
import Img3 from "../../Assets/Carousel Images/slide 3.jpg";

function CarouselBanner() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;
