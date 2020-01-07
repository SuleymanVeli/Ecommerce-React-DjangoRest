import * as actionTypes from '../actions/actionTypes'
const initialState = {    
    userId: null    
}

const reduserCart=(state = initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_USER : 
        return {
            ...state,
            userId:action.payload
          }
        case actionTypes.REMOVE_USER :
        return   { 
            ...state,
            userId:null                    
        }
        default : return state
    }
}

export default reduserCart;