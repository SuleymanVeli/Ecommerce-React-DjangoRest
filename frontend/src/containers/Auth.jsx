import React, { Component } from 'react'
import LogIn from '../components/LogIn'
import Register from '../components/Register'
export default class Auth extends Component {
    render() {
        return (
            <div>                
                {this.props.routes.comp === "login"?<LogIn/>:<Register/>}
            </div>
        )
    }
}
