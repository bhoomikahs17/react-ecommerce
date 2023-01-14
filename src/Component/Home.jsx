import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Products from './Products';

const Home = () => {
  return (
      <div className='hero'>
          <Card className="bg-light text-dark border-0">
              <Card.Img src="../assets/s6.jpg" alt="Card image" height="500px" />
              <Card.ImgOverlay className='d-flex flex-column justify-content-center'> 
                <Container fluid>
                <Card.Title className='display-3 fw-bolder mb-0'>NEW SEASON ARRIVALS</Card.Title>
                  <Card.Text className='lead fs-2'>
                    CHECK OUT ALL THE TRENDS
                  </Card.Text>
                </Container>
              </Card.ImgOverlay>
          </Card>
          <Products />

      </div>
  )
}

export default Home;
