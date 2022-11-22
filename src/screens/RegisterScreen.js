import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Sign Up</h1>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name"></Form.Control>
            </Form.Group>

            <Form.Group controlId="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-2 rounded">
              Register
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              Have an Account? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterScreen