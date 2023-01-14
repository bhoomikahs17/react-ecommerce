import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='py-3 shadow-sm bg-white'>
                <Container fluid>
                <Navbar.Brand to="#"  className='fw-bold fs-4'>E COLLECTIONS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0 fs-4" style={{ maxHeight: '100px' }}
                          navbarScroll>
                             <Nav.Link to="/home" active >Home</Nav.Link>
                          <Nav.Link to="products" >Products</Nav.Link>
                          <Nav.Link to="about" >About</Nav.Link>
                          <Nav.Link to="contact" >Contact</Nav.Link>
                          
                          
                        </Nav>
                        <Button variant="outline-dark" to="/login" className='me-2'><i className='fa fa-sign-in '></i>Login</Button>
                      <Button variant="outline-dark" to="/register" className='me-2 ms-2'><i className='fa fa-user-plus '></i>Register</Button>
                      <Button variant="outline-dark"  to="cart" className='me-2 ms-2'><i className='fa fa-shopping-cart '></i>Cart (0)</Button>
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar bg="light" expand="lg" className='py-3 shadow-sm bg-white'>
              <Container fluid>
                  <NavLink to="/"  className='fw-bold fs-4'>E COLLECTIONS</NavLink>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                      <Nav
                          className="mx-auto my-2 my-lg-0 fs-4"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                          <NavLink to="/" active >Home</NavLink>
                          <NavLink to="/Products" >Product</NavLink>
                          <NavLink to="/About" >About</NavLink>
                          <NavLink to="/Contact" >Contact</NavLink>
                      </Nav>
                      <div className="buttons">
                      <NavLink  to="/login" variant="outline-dark" className='me-2'><i className='fa fa-sign-in '></i>Login</NavLink>
                      <NavLink  to="/register" variant="outline-dark" className='me-2 ms-2'><i className='fa fa-user-plus '></i>Register</NavLink>
                      <NavLink  to="/cart" variant="outline-dark" className='me-2 ms-2'><i className='fa fa-shopping-cart '></i>Cart (0)</NavLink>
                     
                        
                      </div>
                      
                  </Navbar.Collapse>
              </Container>
          </Navbar> */}

        </div>
    )
}

export default NavBar;
