import * as actionTypes from './actionTypes'
import axios from 'axios'


export const fetchCart = () => {
    return dispatch => {
        const userToken = localStorage.getItem("userToken")
        console.log(userToken)
        dispatch(fetchCartRequest())
        return axios
            .get('http://127.0.0.1:8000/cart/',
                {
                    headers: {"Authorization" : `Token ${userToken}`}
                })
            .then(response => {              
                dispatch(fetchCartSuccess(response.data))
            })
            .catch(error => {               
                dispatch(fetchCartFailure(error.message))
            })
    }
}

export const addCartProduct = (productid) => {
    return dispatch => {
        const userToken = localStorage.getItem("userToken")
        const cart = {
                product : productid,
                quantity: 1              
            }
        dispatch(fetchCartRequest())
        return axios
            .post(`http://127.0.0.1:8000/cart/`,cart,{
                headers: {"Authorization" : `Token ${userToken}`}               
            })
            .then(response => {
                dispatch(fetchCartSuccess(response.data))
            })
            .catch(error => {                
                dispatch(fetchCartFailure(error.message))
            })
    }
}

export const updateCart = (id,q) => {
    return dispatch => {
        const userToken = localStorage.getItem("userToken")
        const cart = {
                quantity: q              
            }
        dispatch(fetchCartRequest())
        return axios
            .patch(`http://127.0.0.1:8000/cart/${id}/`,cart,{
                headers: {"Authorization" : `Token ${userToken}`}               
            })
            .then(response => {
                dispatch(fetchCart())
            })
            .catch(error => {                
                dispatch(fetchCartFailure(error.message))
            })
    }
}


export const removeCartProduct = (id) => {
    return dispatch => { 
        const userToken = localStorage.getItem("userToken")       
        dispatch(fetchCartRequest())        
        return axios.delete(`http://127.0.0.1:8000/cart/${id}/`,{headers: {"Authorization" : `Token ${userToken}`}})
            .then(response => {                              
                dispatch(fetchCart())
            })
            .catch(error => {                
                dispatch(fetchCartFailure(error.message))
            })
    }
}


const fetchCartRequest=()=>{
    return {
        type:actionTypes.FETCH_CART_REQUEST
    }
}

 const fetchCartSuccess=(data)=>{    
    return {
        type:actionTypes.FETCH_CART_SUCCESS,
        payload:data
    }
}

 const fetchCartFailure=(error)=>{
    return {
        type:actionTypes.FETCH_CART_FAILURE,
        payload:error
    }
}
