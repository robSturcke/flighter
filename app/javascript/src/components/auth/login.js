import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="login_wrap">
      <h2 className="text-center">Login</h2>
      <div className="py-1">
        <div className="border-bottom" />
      </div>
      <Form validated={validated}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your email"
            // value={user.email}
            // onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Your password"
            // value={user.password}
            // onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit" disabled block>
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
