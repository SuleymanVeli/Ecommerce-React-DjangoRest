import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { fetchCart } from "../redux/actions/actionCart"

class LogIn extends Component {

    state = {        
            username:"",
            password:""        
    };
    
    emailChange(event) {
        this.setState({ username: event.target.value});
    }

    passwordChange(event) {        
        this.setState({ password: event.target.value });
    }

    postLogin=()=>{        
        axios
        .post("http://127.0.0.1:8000/login/",this.state)
        .then(response => {
            localStorage.setItem('userToken',response.data.token)
            this.props.fetchCart()
        })
        .catch(error => {          
            console.log(error)
        })        
    }

    handleSubmit(event) {    
        event.preventDefault();
        this.postLogin()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" value={this.state.username} onChange={this.emailChange.bind(this)} />
                    <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        fetchCart: () => dispatch(fetchCart())        
    }
}

export default connect(null, mapDispatchToProp)(LogIn); 