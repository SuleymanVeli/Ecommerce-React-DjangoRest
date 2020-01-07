import * as actionTypes from '../actions/actionTypes'
const initialState = {
    loading: false,
    carts: [],
    summary: 0,
    error:'',
}

const mathSummary=(carts)=>{
    var summary = 0;
    var i;
    for (i in carts){
        summary = summary + carts[i].amount;
    }
    return summary
}

const reduserCart=(state = initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_CART_REQUEST : 
        return {
            ...state,
            loading: true
          }
        case actionTypes.FETCH_CART_SUCCESS :
        return   {
            ...state,
            loading: false,
            carts: action.payload,
            summary: mathSummary(action.payload),
            error:''
        }
        case actionTypes.FETCH_CART_FAILURE : 
        return {   
            ...state,        
            loading: false,
            error:action.payload
        }        
        default : return state
    }

}

export default reduserCart;