import React from 'react';
import {Button, Container, Form,Row,  Col} from 'react-bootstrap';


function Contact() {
  return (
      <div className='bg-light'>

          <Container>
              <Row className='mb-5 mt-3'>
                  <Col lg={8}>
                      <h1 className='display-4 mb-4'>Contact Me</h1>
                  </Col>
              </Row>
              <Row className="sec_sp">
                  <Col className='mb-5' lg={5}>
                      <h3 className='color_sec py-4'> Get in touch</h3>
                      <address>
                          <strong>Email : ecommerce@gmail.com</strong>
                          <br />
                          <br />
                          <p>
                              <strong>Phone : +87 xxx xxx</strong>
                          </p>
                      </address>
                      <p>Assignments to the 'componentMounted' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect</p>
                  </Col>
                  <Col lg={7} className="d-flex align-item-center">
                      <form className='contact_form w-100'>
                          <Row>
                              <Col lg={6} className="form-group">
                                  <input
                                      className='form-control'
                                      id='name'
                                      name='name'
                                      placeholder='Name'
                                      type="text"
                                  />
                              </Col>
                              <Col lg={6} className="form-group">
                                  <input
                                      className='form-control rounded-0'
                                      id='email'
                                      name='email'
                                      placeholder='Email'
                                      type="email"
                                  />
                              </Col>

                          </Row>
                          <textarea
                              className='form-control rounded-0 mt-2' id="message"
                              name='message'
                              placeholder='Message'
                              rows='5'
                              />
                              <br/>
                              <Row>
                                <Col lg="12" className='form-group'>
                                    <Button className='btn ac_btn ' type='submit'>Send</Button>
                                </Col>
                              </Row>

                          
                      </form>
                  </Col>

              </Row>

          </Container>



      </div>
  )
}

export default Contact
