import React from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './registration.css'

export default function Registr() {
  return (
  <div>
    <div className="title">
      <h1>How Artificial Intelligence Will Change Everything</h1>
      <h2><a href="#">Join us</a> and be a part of this.</h2>
      <h2 className="logo">AI-Challenge</h2>
    </div>
    <div className="registrationForm">
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
  </div>
  );
}
