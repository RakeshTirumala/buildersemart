import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM } from "../constants/cartConstants"
import axios from 'axios';

export const addToCart = (id, details, loc, comp, B)=> async(dispatch, getState)=>{
    // const {data} = await axios.get(`/api/everyitem/${id}`);
    if(B==='Agg'){
       const {data} = await axios.get(`https://emartserver.herokuapp.com/api/aggpageitems/${id}`);
        dispatch({
            type:CART_ADD_ITEM,
            payload:{
                item_name:data.item_name,
                img_link:data.img_link,
                item:data._id,
                details,
                loc,
                comp, 
            }
        })
    }
    else if(B==='Cmt'){
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/cmtpageitems/${id}`);
        dispatch({
            type:CART_ADD_ITEM,
            payload:{
                item_name:data.item_name,
                img_link:data.img_link,
                item:data._id,
                details,
                loc,
                comp, 
            }
        })
    }
    else if(B==='STL'){
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/stlpageitems/${id}`);
        dispatch({
            type:CART_ADD_ITEM,
            payload:{
                item_name:data.item_name,
                img_link:data.img_link,
                item:data._id,
                details,
                loc,
                comp, 
            }
        })
    }
    else if(B==='BNB'){
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/bricksblocks/${id}`);
        dispatch({
            type:CART_ADD_ITEM,
            payload:{
                item_name:data.item_name,
                img_link:data.img_link,
                item:data._id,
                details,
                loc,
                comp, 
            }
        })
    }

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

 
export const removeFromCart = (id) => (dispatch, getState)=>{
    dispatch(
        {
            type:CART_REMOVE_ITEM,
            payload: id
        }
    )
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const emptyCart = (cartItems) =>(dispatch, getState)=>{
    dispatch(
        {
            type:CART_EMPTY,
            payload: cartItems
        }
    )
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}