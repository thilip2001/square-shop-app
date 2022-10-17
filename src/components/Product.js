import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-4 rounded">
      <Link to={`/products/${product.id}`}>
        <Card.Img className="bs-img" src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/products/${product.id}`}>
          <Card.Title as="div">
              <strong>{product.title.substring(0,17)}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
