import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCart,removeCartProduct,updateCart } from '../redux/actions/actionCart'

class CartList extends Component {
    
    componentDidMount() {
        this.props.fetchCart()
    }

    removeCart(id){
        this.props.removeCartProduct(id)
    }

    updateCart(id,q){
        this.props.updateCart(id,q)
    }

    render() {
        return (

            <div className='shop-card'> 
                <div className="shop-card-header">
                    <h3>Shopping Card</h3>                    
                </div>
                <div className="shop-card-list">
                    {
                        this.props.carts.map(c => 
                        <div 
                            key={c.id} 
                            className="shop-card-item"
                        >
                            <div className="img">
                                <img src="" alt=""/>
                            </div>
                            <div className="text">
                                {c.product.title}
                            </div>
                            <div className="quantity">
                                <div className="buttons">
                                    <span className="btn" onClick={()=>this.updateCart(c.id,c.quantity+1)}><i className="fas fa-plus-circle"></i></span>
                                    <span className="value">{c.quantity}</span> 
                                    <span className="btn" onClick={()=>this.updateCart(c.id,c.quantity-1)}><i className="fas fa-minus-circle"></i></span>
                                </div>                                
                            </div>
                            <div className="amount">
                                {c.amount}
                            </div>
                            <div className="remove">
                                <span className='button-remove btn' onClick={()=>this.removeCart(c.id)}>
                                <i className="far fa-trash-alt"></i>
                                </span>
                            </div>       
                        </div>)
                    }
                </div>
            </div> 
        )
    }
}



function mapStateToProp(state) {
    console.log(state)
    return {
        carts: state.Cart.carts,       
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        fetchCart:()=>dispatch(fetchCart()),
        removeCartProduct:(id)=>dispatch(removeCartProduct(id)),
        updateCart:(id,p)=>dispatch(updateCart(id,p))
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(CartList);









