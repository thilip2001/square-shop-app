import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await response.json());
    };

    getProduct();
  }, [id]);

  return (
    <>
      <Link className="btn  rounded my-3 button" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.title} fluid />
        </Col>
        <Col md={5} className="my-auto">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description :{product.description}</ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
       
      </Row>
    </>
  );
};

export default ProductScreen;
