// import Axios  from "axios"
import axios from "axios";
import {CALCI_ORDER, CALCI_ORDER_SUCCESS, CONFIRM_ORDER} from "../constants/orderConstants"

export const order=(id,email_inp, phno_inp, cartItems)=>async(dispatch, getState)=>{
    dispatch({
        type:CONFIRM_ORDER,
        payload : {
            id:id,
            email:email_inp,
            phoneNo:phno_inp,
            orderedItems:cartItems
        }
    })
    localStorage.setItem('orderedItems', JSON.stringify(getState().orders.orderedItems))
}

// export const CalciView=(_id)=>async(dispatch)=>{
//     dispatch({
//       type: CALCI_ORDER,
//       payload: _id,
//     })
//     const {data} = axios.get(`/api/ordereditems/${_id}`)
//     dispatch({
//         type:CALCI_ORDER_SUCCESS,
//         payload:data
//     })
//   };
