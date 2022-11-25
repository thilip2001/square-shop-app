import React, { useEffect, useState } from "react";
import { Image, Col, Row, Dropdown, Carousel } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products)

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      setProducts(await response.clone().json());
      setFilter(await response.json());
    };

    getProducts();
  }, []);

  const filterProduct =(cat)=>{
      const updatedList = products.filter((product)=>product.category === cat);
      setFilter(updatedList);
  }
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

      <Dropdown>
        <Dropdown.Toggle variant="dark" className="rounded" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilter(products)}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("men's clothing")}>
            Mens Clothing
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("women's clothing")}>
            Womens Clothing
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("electronics")}>
            Electronics
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("jewelery")}>
            Jewellery
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h1 className="my-3">Products</h1>
      <Row>
        {filter.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
