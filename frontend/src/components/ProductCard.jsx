import React, { Component } from "react";
import { connect } from 'react-redux'
import { addCartProduct } from '../redux/actions/actionCart'


 class ProductCard extends Component {

  render() {
    const {product} = this.props
    return (
      <div className="product-card">
        <div className="product-card-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-card-text">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-card-price">
          <p>{product.price}</p>
          <div className="card-button" onClick={()=>this.props.addCartProduct(product.id)}>Add Card</div>
        </div>        
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return{
      addCartProduct:(product)=>dispatch(addCartProduct(product))
  }     
}

export default connect(null, mapDispatchToProp)(ProductCard);
