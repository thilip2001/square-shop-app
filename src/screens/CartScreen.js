import { useContext, useReducer } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/Context";


function CartScreen() {
  const GlobalState = useContext(Cartcontext);
  const state = GlobalState.state;
  const dispatch = GlobalState.disptach;

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {state.length === 0 ? (
          <h4>
            {" "}
            Your cart is empty{" "}
            <Link to="/" className="btn  rounded my-3 button">
              {" "}
              Go Back
            </Link>
          </h4>
        ) : (
          <ListGroup variant="flush">
            {state.map((product, id) => (
              <ListGroup.Item key={id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </Col>
                  <Col md={2}>${product.price * product.quantity}</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: product })
                      }
                    >
                      +
                    </Button>
                    {product.quantity}
                    <Button type="button" variant="light" onClick={() => {}}>
                      -
                    </Button>
                  </Col>

                  <Col md={2}>
                    <Button type="button" variant="light" onClick={() => {}}>
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}

export default CartScreen;
