import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Button, Nav, Navbar } from 'react-bootstrap';
import Home from './Home';
import Products from './Products';



function Layout (){
  return (
    <>
    <Navbar bg="light" expand="lg" className='py-3 shadow-sm bg-white'>
    <Navbar.Brand to="#" className='fw-bold fs-4 mx-5'>E COLLECTIONS
      </Navbar.Brand>
      <Nav className="mx-auto my-2 my-lg-0 fs-4" style={{ maxHeight: '100px' }}
        navbarScroll>
          <ul className='ul my-4 '>
          <li className='list_item'>
            <Link to="/react-ecommerce" className='link '>Home</Link>
          </li>
          <li>
            <Link to="products" className='link'>Products</Link>
          </li>
          <li>
            <Link to="about" className='link'>About</Link>
          </li>
          <li>
            <Link to="contact" className='link'>Contact</Link>
          </li>
          <li>
            <Link className=' link text-dark fs-12' to='login'><i className='fa fa-sign-in '></i>Login</Link>

          </li>
          <li>
            <Link className=' link text-dark fs-15' to='register'><i className='fa fa-user-plus '></i>Register</Link>

          </li>
          <li>
            <Link to="*" className='link'></Link>
          </li>
          
            
            
        </ul>



      </Nav>
     

    </Navbar>
      
     
      
        
      
     
      <Outlet />  
    </>
    
  )
};

export default Layout;
