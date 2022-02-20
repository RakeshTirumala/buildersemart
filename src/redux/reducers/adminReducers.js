import { ADMIN_SIGNIN_FAIL, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNOUT } from "../constants/adminConstants";

const initialState = {
    adminInfo:localStorage.getItem('adminInfo')? JSON.parse(localStorage.getItem('adminInfo')) : null
}
export const adminSigninReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADMIN_SIGNIN_SUCCESS:
            return { adminInfo: action.payload};
        case ADMIN_SIGNIN_FAIL:
            return {adminInfo: action.payload};
        case ADMIN_SIGNOUT:
            return {};
        default:
            return state;
    }
}