import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
import CartList from '../components/CartList'
import OrderForm from '../components/OrderForm'

export default class Chechout extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="9">
                        <CartList/>
                        <OrderForm/>
                    </Col>
                    <Col xs="3">
                        
                    </Col>
                    </Row>                    
                </Container>             
            </div>
        )
    }
}
