import redusers from './index'
import {createStore, applyMiddleware, compose} from 'redux';
import tunks from 'redux-thunk';
//import Immutable from "immutable"

export default function cofigureStore(){
    return createStore(
        redusers,
        compose(
            applyMiddleware(tunks),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}