
import axios from 'axios';
import { ADMIN_SIGNIN_FAIL, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNOUT} from '../constants/adminConstants';


export const signin = (email, password) =>async(dispatch)=>{
    dispatch({
        type: ADMIN_SIGNIN_REQUEST, 
        payload:{email,password}
    });

    try {
        const {data} = await axios.post('https://emartserver.herokuapp.com/api/admin/signin', {email, password})

        dispatch({
            type: ADMIN_SIGNIN_SUCCESS, 
            payload:data
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type:ADMIN_SIGNIN_FAIL,
            payload :
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

export const signout = () =>(dispatch)=>{
    localStorage.removeItem('adminInfo')
    dispatch({type:ADMIN_SIGNOUT})
}