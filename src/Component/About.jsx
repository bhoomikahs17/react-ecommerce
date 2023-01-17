import React from 'react'
import { Container,Card,Col,Row } from 'react-bootstrap'

function About() {
  return (
    <div>
        <Container fluid>
            
        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9sWDzG8PRF3Lwg6eIjoFzn9Xn6wCx8Hqwg&usqp=CAU" alt="Card image" height="500px" width="100%"  className='mb-5'/>
        <Row>
            <Col md={6}>
            <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVfnu5u6jYU6wYl780-UVRqWUL1OUMMWRnQ&usqp=CAU" alt="Card image" height="500px"  width="250px"/>

            </Col>
            <Col md={6} className='mb-5'>
                <h1>About </h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default About
