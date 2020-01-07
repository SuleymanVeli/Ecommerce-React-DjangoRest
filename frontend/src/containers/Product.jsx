import React from 'react'
import Filter from "../components/Filter"
import ProductList from '../components/ProductList'
import { Container, Row, Col } from 'reactstrap';



function Product() {      
    return (
        <Container>
            <Row>
                <Col xs="3">
                    <Row>
                        
                    </Row>
                    <Row>
                        <Filter />
                    </Row>
                </Col>
                <Col xs="9">
                    <ProductList />                    
                </Col>
            </Row>
        </Container>
    )

}
export default Product;