import React,{useState, useEffect} from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Product = () => {
    const {id} = useParams();
    const [Product, setProduct] = useState([]);
    const [loading, setLoading]= useState(false);
    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]); 
    const Loading = () => {
        return(
            <>
            Loading.....
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            <Col md={6}>
                <img src = {Product.image} alt={Product.title}/>
            </Col>
            </>
        )
    }
  return (
    <div>
    <Container>
        <Row>
            {loading ? <Loading/> : <ShowProduct/>}
        </Row>
    </Container>
      
    </div>
  )
}

export default Product;
