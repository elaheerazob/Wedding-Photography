import React from "react";
import { Button, Form } from "react-bootstrap";

const Checkout = () => {
  return (
    <div className="w-50 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Your Number"
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="checkout">
        Checkout
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
