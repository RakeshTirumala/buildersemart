
import { ORDERED_ITEMS_VIEW, ORDERED_ITEMS_CONFIRM} from "../constants/orderitemsVConstants";



export const ordersView=(cbsOrders)=>async(dispatch, getState)=>{
    dispatch({
        type:ORDERED_ITEMS_VIEW,
        payload: cbsOrders
    })
    localStorage.setItem('cbsorders', JSON.stringify(getState().cbsOrders))
}

