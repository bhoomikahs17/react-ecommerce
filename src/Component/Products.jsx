
import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';

      
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      }

    }
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <Col md={3}>
          <Skeleton height={350}/>
        </Col>
        <Col md={3}>
          <Skeleton height={350}/>
        </Col>
        <Col md={3}>
          <Skeleton height={350}/>
        </Col>
        <Col md={3}>
          <Skeleton height={350}/>
        </Col>
      </>
    );
  };

   const filterProduct = (cat)=> {
    const updatedList = data.filter((x)=>x.category === cat);
   setFilter(updatedList);
   }

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <Button className='btn-outline-dark me-2 bg-dark text-light' onClick={()=> setFilter(data)}>All</Button>
          <Button className='btn-outline-dark me-2 bg-dark text-light' onClick={()=> filterProduct("women's clothing")}>Women's Clothing</Button>   
          <Button className='btn-outline-dark me-2 bg-dark text-light' onClick={()=> filterProduct("men's clothing")}>Men's Clothing</Button>
          <Button className='btn-outline-dark me-2 bg-dark text-light' onClick={()=> filterProduct("jewelery")}>Jewelery</Button>
          <Button className='btn-outline-dark me-2 bg-dark text-light' onClick={()=> filterProduct("electronics")}>Electronic</Button>
        </div>
        {
          filter.map((product)=>{
            return(
              <>
                <Col md={3} className='mb-4'>
                  <Card className='h-100 text-center p-4 ' key={product.id}>
                    <Card.Img variant="top" src={product.image}  alt={product.title} height="250px" />
                    <Card.Body>
                      <Card.Title className='mb-0'>{product.title.substring(0,12)}... </Card.Title>
                      <Card.Text className='lead fw-bold'>
                        ${product.price}
                      </Card.Text>
                      <Button variant="" className='btn btn-outline-dark' to={`/products/${product.id}`}>Buy Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )
          })
        }

      </>
    );


  };
  return (
    <div>
      <Container className='my-5 py-5'>
        <Row>
          <Col sm={12} className='mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1><hr />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          {loading ? <Loading /> : <ShowProducts/>}
        </Row>
      </Container>
    </div>
  )
}

export default Products;
