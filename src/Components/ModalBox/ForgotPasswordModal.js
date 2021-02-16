import React from "react";
import { Form, Button } from "react-bootstrap";

function ForgotPasswordModal() {
  return (
    <Form className="LoginForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" isvalid />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
    </Form>
  );
}

export default ForgotPasswordModal;
