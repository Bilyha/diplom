import React from 'react';
import './regAuth.css';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RegAuth() {
  return (
    <div>
      <Form horizontal className="regAuth__form">
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Login
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Login" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col smOffset={2} sm={10} className="form__buttonGroup">
            <Link to="main">
              <Button type="submit">
                Log in
              </Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
