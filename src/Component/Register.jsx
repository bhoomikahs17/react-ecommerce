import React from 'react';
import { Container } from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap';

function Register() {
  return (
    <div>
        <Container fluid className='bg-light'>
        <h1 className='display-4 mb-4'>Register Form</h1>
        <Form className='mt-4 mx-5 '>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="reset" className='mx-2' >
                  Reset
              </Button>
    </Form>

        </Container>
      
    </div>
  )
}

export default Register;
