import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchProducts = (url) => {
    console.log(url)
    return dispatch => {
        dispatch(fetchProductsRequest())
        return axios.get('http://127.0.0.1:8000/product/'+url)
            .then(response => {
                const products = response.data              
                dispatch(fetchProductsSuccess(products,url))
            })
            .catch(error => {               
                dispatch(fetchProductsFailure(error.message))
            })
    }
};



const fetchProductsRequest=()=>{
    return {
        type:actionTypes.FETCH_PRODUCTS_REQUEST
    }
}

const fetchProductsSuccess=(products,url)=>{    
    return {
        type:actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload:products,
        url:url
    }
}

const fetchProductsFailure=(error)=>{
    return {
        type:actionTypes.FETCH_PRODUCTS_FAILURE,
        payload:error
    }
}



export const setCategoryId = (categoryId) => {    
    return {
        type: actionTypes.SET_CATEGORY_ID,        
        payload: categoryId
    };
};

export const filterProductsBySearch = (productName) => {    
    return {
            
        payload: productName
    };
};
