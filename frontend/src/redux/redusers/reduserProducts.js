import * as actionTypes from '../actions/actionTypes'
const initialState = {
  loading: false,
  products: [],
  categoryid: [],
  error: '',  
  count: 0,
  url:''
  
}

const reduserProducts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.results,
        count: Math.ceil(action.payload.count/2),
        url: action.url,   
        error: '',        
      }
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload
      }
    default: return state
  }
}

export default reduserProducts;