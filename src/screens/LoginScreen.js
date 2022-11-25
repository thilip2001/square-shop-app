import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginScreen = ({ token, setToken }) => {
  const [userName, setUserName] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");

  const loginHandler = (e) => {
    e.preventDefault();
    setPassword("");
    setUserName("");
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: "johnd",
        password: "m38rmF$",
      },
    }).then((res) => {
      console.log(res.data.token);
      setToken(res.data.token);
      localStorage.setItem("userToken", res.data.token);
    });
  };

  return (
    <Container className="mt-5 bg-light">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          <Form>
            <Form.Group>
              <Form.Label className="fw-bold">User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="mt-2 rounded"
              onClick={loginHandler}
            >
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New Customer?<Link to="/register"> Register</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
