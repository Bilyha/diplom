import React from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Registr() {
  return (
    <div>
      <Form horizontal >
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="First Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Second Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Second Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
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

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Repeat Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Repeat Password" />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col smOffset={2} sm={10} className="form__buttonGroup">
            <Link to="main">
              <Button >
                Sign in
              </Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
      <p> Already in Challange? <Link to="authorization">Log in</Link></p>
    </div>
  );
}
