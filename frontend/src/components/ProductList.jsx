import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts} from '../redux/actions/actionProducts'
import ProductCard from './ProductCard'
import Pgn from './Pgn'

class ProductList extends Component {

    state = {
        style_view : true,
        product_card_style : ''       
    }

    changeView=(view)=>{
        if(view)
            this.setState({product_card_style:
            `    
            .product-card{
                width: 100%;                                
            }
            .product-card-image{
                width: 30%;                                
            }
            .product-card-price{
                width: 20%;                                
            }
            .product-card-price p,.card-button{
                width: 100%                                
            }
            .product-card-text{
                width: 50%;                                
            }
            .product-card-text p {
                white-space: inherit;
            }
            `
        })
        
        else this.setState({product_card_style: ''})        
    }
       
    getProduct=(url)=>{
        this.props.fetchProduct(url)
    }   

    render() {
        return (
            <div className='product-list'>
                <style>
                    {
                        this.state.product_card_style                          
                    }
                </style>
                <div className="product-card-view">
                    <span className='cards' onClick={()=>this.changeView(false)}>
                    <i class="fas fa-th-large"></i>
                    </span>
                    <span className='details' onClick={()=>this.changeView(true)}>
                    <i class="fas fa-th-list"></i>
                    </span>                    
                </div>
                <div className="produt-card-wrap">
                    {
                    this.props.products.map(p =>(<ProductCard key={p.id} product={p} />))                        
                    }                    
                </div>                                
                <Pgn url={this.props.url} getItem = {this.getProduct} count={this.props.count} />
            </div>
        )
    }
}

function mapStateToProp(state) {
    console.log(state)
    return {        
        products: state.Product.products,
        count: state.Product.count,
        url: state.Product.url          
    }
}

const mapDispatchToProp = (dispatch) => {
   return{
       fetchProduct:(url)=>dispatch(fetchProducts(url))       
   }     
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductList);
