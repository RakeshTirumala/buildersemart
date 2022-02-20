import { Axios } from "axios"
import { ActionTypes } from "../constants/action-types"

export const setItems = (items) => {
    return {
        type:ActionTypes.SET_ITEMS,
        payload:items
    }
}

export const AggItems = (items)=> {
    return {
        type:ActionTypes.AGG_ITEMS, 
        payload:items
    }
}

export const selectedAggItem = (id) =>async(dispatch)=>{
    dispatch({
      type: ActionTypes.SELECTED_AGG_ITEM,
      payload: id,
    })
    const {data} = Axios.get(`https://emartserver.herokuapp.com/api/aggpageitems/${id}`)
    dispatch({
        type:ActionTypes.SELECTED_AGG_ITEM_SUCCESS,
        payload:data
    })
  };
