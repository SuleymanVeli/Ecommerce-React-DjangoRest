import React, { Component } from 'react'
import Payment from 'payment';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from "./Utils";
import axios from "axios"

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class OrderForm extends Component {

    state = {
        name: null,    
        street: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        number: null,
        expiry: null,
        cvc: null,
        formErrors: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            number: '',
            expiry: '',
            cvc: '',
        }
    };


    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "name":
                formErrors.name = value.length > 2
                    ? ""
                    : "invalid name";
                break;
            case "number":
                e.target.value = formatCreditCardNumber(value);
                formErrors.number = Payment.fns.validateCardNumber(value)
                    ? ""
                    : "invalid number format";
                break;
            case "expiry":
                e.target.value = formatExpirationDate(value);
                formErrors.expiry = Payment.fns.validateCardExpiry(value)
                    ? ""
                    : "invalid date format";               
                break;
            case "cvc":
                e.target.value = formatCVC(value);
                formErrors.cvc = Payment.fns.validateCardCVC(value)
                    ? ""
                    : "invalid code format";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value });
    };

    postOrder = ()=>{
        const order = {
            name : this.state.name,
            address : this.state.street,
            city : this.state.city,
            phone : this.state.street
        }
        const userToken = localStorage.getItem("userToken")
        axios
            .post('http://127.0.0.1:8000/order/',order,
                {
                    headers: {"Authorization" : `Token ${userToken}`}
                })
            .then(response => {              
                console.log(response.data)
            })
            .catch(error => {               
                console.log(error)
            })

    }

    handleSubmit(event) {
        event.preventDefault();
        if (formValid(this.state)) {
            console.log('post')
            this.postOrder()
        } else {

        }
    }

    render() {
        const { formErrors } = this.state;
        return (

            <div className='order-form'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="contact order-form-cart">
                        <div className="order-header">
                            <h3>CONTACT INFO</h3>                           
                        </div>
                        <div className="order-form">
                            <div className='input-container full'  >
                                <input type='name' name='name'  onChange={this.handleChange.bind(this)} placeholder="name" />
                                <span className="input-border"></span>
                                {formErrors.name.length > 0 && (
                                    <span className="errorMessage">{formErrors.name}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="shipping-address order-form-cart">
                        <div className="order-header">
                            <h3>SHIPPING ADDRESS</h3>
                        </div>
                        <div className="order-form">
                            <div className='input-container full' >
                                <input type="text" name='street'  onChange={this.handleChange.bind(this)} placeholder="street" />
                                <span className="input-border"></span>
                                {formErrors.street.length > 0 && (
                                    <span className="errorMessage">{formErrors.street}</span>
                                )}
                            </div>
                            <div className='input-container triple' >
                                <input type="text" name='city'  onChange={this.handleChange.bind(this)} placeholder="city" />
                                <span className="input-border"></span>
                            </div>
                            <div className='input-container triple' >
                                <input type="text" name='state'  onChange={this.handleChange.bind(this)} placeholder="state" />
                                <span className="input-border"></span>
                            </div>
                            <div className='input-container triple' >
                                <input type="text" name='zip'  onChange={this.handleChange.bind(this)} placeholder="zip" />
                                <span className="input-border"></span>
                            </div>
                            <div className='input-container full' >
                                <input type="text" name='country'  onChange={this.handleChange.bind(this)} placeholder="country" />
                                <span className="input-border"></span>
                            </div>
                        </div>
                    </div>
                    <div className="payment-method order-form-cart">
                        <div className="order-header">
                            <h3>PAYMENT</h3>
                        </div>
                        <div className="order-form">
                            <div className='input-container full' >
                                <input type="tel" name='number' onChange={this.handleChange.bind(this)} placeholder="0000 0000 0000 0000" />
                                <span className="input-border"></span>
                                {formErrors.number.length > 0 && (
                                    <span className="errorMessage">{formErrors.number}</span>
                                )}
                            </div>
                            <div className='input-container binary' >
                                <input type="tel" name='expiry' onChange={this.handleChange.bind(this)} placeholder="MM/YY" />
                                <span className="input-border"></span>
                                {formErrors.expiry.length > 0 && (
                                    <span className="errorMessage">{formErrors.expiry}</span>
                                )}
                            </div>
                            <div className='input-container binary' >
                                <input type="tel" name='cvc' onChange={this.handleChange.bind(this)} placeholder="CVC" />
                                <span className="input-border"></span>
                                {formErrors.cvc.length > 0 && (
                                    <span className="errorMessage">{formErrors.cvc}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="order-summari order-form-cart">
                        <div className="order-header">
                            <h3>ORDER SUMMARY</h3>
                        </div>
                        <div className="order-form">
                        </div>
                    </div>
                    <div className="order-submit order-form-cart">
                        <input type="submit" value="Order" />
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderForm