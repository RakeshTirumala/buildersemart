import { ORDERED_ITEMS_VIEW } from "../constants/orderitemsVConstants";
const initialState = {
    cbsorders:[]
}

export const ordereditemsReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case ORDERED_ITEMS_VIEW:
            return {...state, cbsorders:payload}
        
        default:
            return state
    }
}

    // switch(type){
    //     case ORDERED_ITEMS_VIEW:
    //         return {...state, cbsorders:[...state.cbsorders payload}
        
    //     default:
    //         return state
    // }