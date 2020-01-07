import * as actionTypes from './actionTypes'

export const addUser=(id)=>{        
    return {
        type:actionTypes.ADD_USER,
        payload:id
    }
}

export const removeUser=()=>{
    return {
        type:actionTypes.REMOVE_USER        
    }
}