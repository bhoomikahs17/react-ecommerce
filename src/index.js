import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awewsome/css/font-awewsome.min.css';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Products from './Component/Products';
import Home from './Component/Home';
import Layout from './Component/Layout';
// import NavBar from './Component/NavBar';

import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Register from './Component/Register';
import Product from './Component/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>  
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
