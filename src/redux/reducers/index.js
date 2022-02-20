import { combineReducers } from "redux";
import { adminSigninReducer } from "./adminReducers";
import { cartReducer } from "./cartReducers";
import { itemReducer } from "./itemReducer";
import { ordereditemsReducer } from "./ordereditemsReducer";
import { orderReducer } from "./orderReducers";




export const reducers = combineReducers({
    allItems: itemReducer,
    orders: orderReducer,
    cbsorder: ordereditemsReducer,
    adminSignin: adminSigninReducer,
    cart: cartReducer,
})

