import { useContext } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/Context";
import { FaPlus, FaMinus } from "react-icons/fa";
import CartButton from "../components/CartButton";

function CartScreen() {
  const GlobalState = useContext(Cartcontext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        <hr />
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
                  <Col md={3} className="product-title">
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </Col>
                  <Col className="product-price" md={2}>
                    {/* ${product.price * product.quantity} */}
                    {product.price}
                  </Col>
                  <Col md={2}>
                    <CartButton
                      type={product.quantity > 1 ? "DECREASE" : "REMOVE"}
                      payload={product}
                      icon={<FaMinus />}
                    />
                    <span className="qty">{product.quantity}</span>
                    <CartButton
                      type="INCREASE"
                      payload={product}
                      icon={<FaPlus />}
                    />
                  </Col>
                  <Col md={2}>
                    <CartButton
                      type="REMOVE"
                      payload={product}
                      icon={<i className="fas fa-trash"></i>}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        {state.length === 0 ? (
          ""
        ) : (
          <Row className="mt-2 ">
            <Col>
              <button
                className="btn fw-normal  rounded btn-outline-dark"
                onClick={() => {
                  dispatch({ type: "CLEAR_CART" });
                }}
              >
                Clear Cart
              </button>
            </Col>
          </Row>
        )}
      </Col>
      {state.length === 0 ? (
        ""
      ) : (
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {state.reduce((acc, product) => acc + product.quantity, 0)})
                  items
                </h2>
                $
                {state
                  .reduce(
                    (acc, product) => acc + product.quantity * product.price,
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/shipping">
                  <Button type="button" className="btn-block">
                    Proceed To Checkout
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      )}
    </Row>
  );
}

export default CartScreen;
