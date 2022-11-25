import React from 'react'
import { Carousel } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      {/* <Image src="bg-2.jpg" className="rounded  mt-0 my-4" fluid />
       */}
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 rounded  mt-0 my-4"
            // fluid
            src="bg-2.jpg"
            alt="First slide"
            width={800}
            height={450}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  rounded  mt-0 my-4"
            // fluid
            src="slide2.jpg"
            alt="Second slide"
            width={800}
            height={450}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  rounded  mt-0 my-4"
            // fluid
            src="slide3.jpg"
            alt="Third slide"
            width={800}
            height={450}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  rounded  mt-0 my-4"
            // fluid
            src="slide4.jpg"
            alt="Third slide"
            width={800}
            height={450}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hero