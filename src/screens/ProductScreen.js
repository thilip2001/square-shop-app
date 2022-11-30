import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { Cartcontext } from "../context/Context";
import { getProduct } from "../api/Api";

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  product.quantity = 1;
  useEffect(() => {
    const product = async () => {
      const response = await getProduct(id)
      setProduct(response);
    };

    product();
  }, [id]);
  const GlobalState = useContext(Cartcontext);
  console.log(GlobalState);
  const dispatch = GlobalState.dispatch;

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
                onClick={() => dispatch({ type: "ADD", payload: product })}
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
