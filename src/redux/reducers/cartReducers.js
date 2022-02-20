// import { StaticRouter } from "react-router";
import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM } from "../constants/cartConstants";

const initialState = {
    cartItems:[]
}
 
export const cartReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case CART_ADD_ITEM:
            const Item = payload
            const existItem = state.cartItems.find((x)=>x.item === Item.item)
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map((x)=>
                    x.item === existItem.item ? Item : x
                    )
                }
            }
            return {
                ...state,
                cartItems:[...state.cartItems, Item]
            }
        
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(x=>x.item !==payload)
            }
        
        case CART_EMPTY:
            return {...state, cartItems:[]}
        default:
            return state
    }
} 