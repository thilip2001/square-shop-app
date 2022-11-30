import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getAllProducts, getCategoryProducts } from "../api/Api";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

const HomeScreen = () => {
  const state = useSelector((state) => state.category);
  const [products, setProducts] = useState([]);
  const [error] = useState("");
  const [cat] = useState(state);

  useEffect(() => {
    const products = async () => {
      if (cat === "all") {
        const res = await getAllProducts();
        setProducts(res);
      } else {
        setProducts(await getCategoryProducts(cat));
      }
    };

    products();
  }, [cat]);

  return (
    <>
      {products.length === 0 ? (
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
              <Categories setProducts={setProducts} />

              <h1 className="my-3">Products</h1>
              <Row>
                {products.map((product) => (
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
