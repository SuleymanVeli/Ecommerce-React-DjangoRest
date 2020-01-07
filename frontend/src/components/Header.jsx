import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { filterProductsBySearch } from "../redux/actions/actionProducts"
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
class Header extends Component {

    state = { value: '' }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    SearchProductHandler(e) {
        e.preventDefault()
        this.props.history.push('/products')
        this.props.filterProductsBySearch(this.state.value)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="header__left" >
                        <div className="logo">
                            <Link to="/" className="logo__link">
                                <img className="logo__img" src="/assets/img/logo.png" alt="onlineshop.az"></img>
                            </Link>
                        </div>
                    </Col>
                    <Col className="header__right">
                        <form  onSubmit={this.SearchProductHandler.bind(this)} >
                            <input
                                className='search_input'
                                type='text' value={this.state.value} onChange={this.handleChange.bind(this)}
                                style = {onclick?{backgroundColor:'red'}:null}
                            /> 
                            <input
                                className='search_submit'                            
                                type='submit'
                                value='Axtar'                               
                            />
                        </form>
                        <i className="fas fa-sign-in-alt"></i>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProp(state) {

    return {
        cart: state.Cart
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        filterProductsBySearch: (productName) => dispatch(filterProductsBySearch(productName))        
    }
}

export default compose(withRouter, connect(mapStateToProp, mapDispatchToProp))(Header);