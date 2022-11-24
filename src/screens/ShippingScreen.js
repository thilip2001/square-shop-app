import React, { useContext, useState } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { Cartcontext } from "../context/Context";

const ShippingScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
    const [header, setHeader] = useState("");

    const GlobalState = useContext(Cartcontext);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

  const handleClose = () => setShow(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <Container className=" bg-light w-50 ">
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler} required>
        <Form.Group>
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="fw-bold">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="fw-bold">Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="fw-bold">Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          className="mt-2 rounded "
          variant="primary"
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
          }}
        >
          Place Order
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Order status: <span className="text-success">Success</span>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          Woohoo! Order has been placed!
        </Modal.Body>

        <Modal.Body className="text-center">
          Thanks for shopping with us!, {name}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ShippingScreen;