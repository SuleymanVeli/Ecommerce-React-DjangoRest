import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RouteWithSubRoutes } from "../route/RouteConfig"
import axios from 'axios'

const url = "http://127.0.0.1:8000"

export default class Profile extends Component {

    state = {
        profile : {}
    }

    fetchProfile = () => {
        const userToken = localStorage.getItem("userToken")
        axios
            .get('http://127.0.0.1:8000/profile/',
                {
                    headers: {"Authorization" : `Token ${userToken}`}
                })
            .then(response => {              
                this.setState({profile: response.data}) 
                console.log(response.data)               
            })
            .catch(error => {               
                console.log(error)
            })

    }

    componentDidMount() {
        this.fetchProfile()
    }



    render() {
        return (
            <div className='prf'>
                <div className="prf-header">
                    <div className="container">
                        <img src={url+this.state.profile.image} alt=""/>
                        <div className='h'>
                            <h2>{this.state.profile.name} {this.state.profile.surmane}</h2>
                            <h3>{this.state.profile.email}</h3>
                        </div>
                    </div>
                </div>
                <div className="prf-body">
                    <div className="container">
                        <div className="row">
                            <div className="prf-links col-md-3">
                                <div className="link-list ">
                                    <Link className="link-item" to='/profile/order'>Order</Link>
                                    <Link className="link-item" to='/profile/order'>Order</Link>
                                    <Link className="link-item" to='/profile/order'>Order</Link>
                                </div > 
                            </div>
                            <div className="prf-router col-md-9">
                                {this.props.routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}
