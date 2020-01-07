import {combineReducers} from 'redux'
import reduserProducts from './reduserProducts'
import reduserCart from './reduserCart'

const redusers = combineReducers({    
   Product: reduserProducts,
   Cart: reduserCart    
});

export default redusers;