import React, { Component } from 'react'
import axios from 'axios'
import Pgn from './Pgn'


export default class OrderList extends Component {

    state = {
        orders : [],
        count : 0
    }

    fetchOrder=(url)=>{        
        const userToken = localStorage.getItem("userToken")
        axios
            .get(`http://127.0.0.1:8000/order/${url}`,
                {
                    headers: {"Authorization" : `Token ${userToken}`}
                })
            .then(response => {          
                const count = Math.cell(response.data.count/2)    
                this.setState({orders: response.data.results})
                this.setState({count:count})
            })
            .catch(error => {               
                console.log(error)
            })
    }

    componentDidMount() {
        this.fetchOrder("")
    }
    
    render() {
        console.log(this.state.orders)
        return (
            <div className='order-wraper-list'> 
                <div className="order-header">
                    <h2>Order</h2>                    
                </div>
                <div className="order-wraper">
                    {
                        this.state.orders.map(c => 
                        <div key={c.id}>
                            <div className="order-wraper-item"></div>                                                           
                            {
                                c.items.map(i => <div key={i.id} className="order-list-item">orders</div>)                                
                            }
                            <div className="order-botom"> 
                            </div>
                        </div>)
                    }
                </div>
                <Pgn url={'?'} getItem = {this.fetchOrder} count={this.state.count} />
            </div> 
        )
    }
}
