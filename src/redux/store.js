import { createStore, applyMiddleware, compose} from "redux";
import { reducers } from "./reducers/index";
import thunk from 'redux-thunk'; 


const initialState = {
    cart:{
        cartItems:localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : []
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store