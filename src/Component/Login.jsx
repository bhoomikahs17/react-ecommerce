import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const shoot = () =>{
        alert('Login Successefuly');
    }
    const storedValue = sessionStorage.getItem("useremail");
    const userPsw = sessionStorage.getItem("userpassword");
  return (
    <div>
        <Container fluid className='bg-light'>
        <h1 className='display-4 mb-4'>Login</h1>
        <Form className='mt-4 mx-5 '>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e) => sessionStorage.setItem("useremail", e.target.value)} />
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  onChange={(e) => sessionStorage.setItem("userpassword", e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={shoot}>
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

export default Login;
