import React, { useEffect, useState } from "react";
import { Image, Col, Row, Dropdown } from "react-bootstrap";
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

  const filterProduct =(Cat)=>{
      const updatedList = products.filter((product)=>product.category === Cat);
      setFilter(updatedList);
  }
  return (
    <>
      <Image src="bg-2.jpg" className="rounded  mt-0 my-4" fluid />

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
      <h1 className="my-3">Latest Products</h1>
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
