import { ActionTypes } from "../constants/action-types"

const initialState = {
    items:[]
}

export const itemReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_ITEMS:
            return {...state, items:payload}
        
        case ActionTypes.AGG_ITEMS:
            return {...state, items:payload}
        default:
            return state
    }
}

