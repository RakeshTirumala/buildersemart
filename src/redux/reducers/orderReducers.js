import {CONFIRM_ORDER, CLEAR_ORDER_NEXT} from "../constants/orderConstants"
const initialState = {
    orderedItems:[]
}

export const orderReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case CONFIRM_ORDER:
            return {...state, orderedItems:[...state.orderedItems, payload]}
        
            case CLEAR_ORDER_NEXT:
                return {...state, orderedItems:[]}

        default:
            return state
    }
}