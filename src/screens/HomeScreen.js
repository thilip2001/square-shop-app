import React, { useEffect, useState } from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import { getAllProducts } from "../api/Api";
import Hero from "../components/Hero";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const products = async () => {
      const response = await getAllProducts();
      if (response) {
        setLoading(false);
        setProducts(response);
        setFilter(response);
      } else {
        setError("Something went wrong on our end");
        setLoading(false);
      }
    };

    products();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = products.filter((product) => product.category === cat);
    setFilter(updatedList);
  };

  return (
    <>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          {error ? (
            <div className="text-center mt-5 ">
              <h1>Sorry</h1>
              <h1>{error}</h1>
            </div>
          ) : (
            <>
              <Hero />

              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  className="rounded"
                  id="dropdown-basic"
                >
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setFilter(products)}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => filterProduct("men's clothing")}
                  >
                    Mens Clothing
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => filterProduct("women's clothing")}
                  >
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
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;
