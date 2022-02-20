import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../index.css';
import {signin, signout} from '../redux/actions/adminActions';
import { ordersView } from "../redux/actions/ordereditemsActions";
import Title from "./Title";


export default function IsAdmin(){
    var count = 0;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const dispatch = useDispatch();
    const [status, setStatus] = useState('isAdminPage');
    const [webStatus, SetwebStatus] = useState('isAdmin');
    const adminSignin = useSelector((state)=> state.adminSignin);
    const {adminInfo} = adminSignin;

    const SubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(signin(email, password));
    }
    useEffect(()=>{
        if(adminInfo === "Invalid user"){
           setStatus('Invalid Details!')
        }
        else if(adminInfo === "Invalid password"){
            setStatus('Invalid Details!')
        }
        else if(adminInfo){
            SetwebStatus('ordersAdmin')
            setStatus('adminPage')
        }
    }, [adminInfo, webStatus])

    const fetchOrdereddata = async() =>{
        const response = await axios
        .get('https://emartserver.herokuapp.com/api/ordereditems/seed')
        .catch((err)=>{
            console.log("Err",err)
        })
        dispatch(ordersView(response.data))

        // console.log("response:",response.data)
    }
    useEffect(()=>{
        fetchOrdereddata()
    },[])
  
    const orderedData = useSelector((state)=>state.cbsorder.cbsorders) 
    // console.log("orderedData:", orderedData);

    const navigate = useNavigate()
    const Open=(_id)=>{
        navigate(`/admin/calci/${_id}`)
    }

    // const [rate, setRate] = useState(0);
    // const [transport, setTransport] = useState(0);

    const HandleSignout = () =>{
        SetwebStatus('isAdmin')
        dispatch(signout())
    }

    // const HandleDone=(_id)=>{

    // }

    return(
        webStatus === 'isAdmin'
        ?(
            <>
            <Title/>
            <h1 className="admin-title">Admin page</h1>
            <center>
                <div className="admin-signin-body">
                    <h2 className="admin-signin-title">Sign in</h2>
                    <p className="info">Please enter the details to sign in.</p>
                    <div className="admin-signin-details">
                        <form onSubmit={SubmitHandler}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Email:</th>
                                        <input className="email" 
                                        type="email" 
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        ></input>
                                    </tr>
                                    <br></br>
                                    <tr>
                                        <th>Password:</th>
                                        <input className="password" 
                                        type="password"
                                        name="password" 
                                        id="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        ></input>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="submit" className="admin-signin-btn">Sign in</button>
                        </form>
                        <p>{status}</p>
                    </div>
                </div>
            </center>
            </>
        )
        :(
            <>
            <Title/>
            <div className="admin-bar">
                <ul>
                    <li className="admin-d-title">Admin Dashboard</li>
                    <li><h3 className="signout"><button className="signout-btn" onClick={()=>HandleSignout()}>Sign out</button></h3></li>
                </ul>
            </div>
            <h2 className="rqts-title">Your Requests</h2>
            {
                orderedData.length === 0
                ?(<h2>No New Requests</h2>)
                :(
                    <>
                        <table className="admin-dashtable">
                            <tbody>
                                <tr className="admin-dashtable-r1">
                                    <th>SNO</th>
                                    <th>ORDER ID</th>
                                    <th>DATE</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE NO</th>
                                    <th>Exp.Date</th>
                                    <th>ITEMS</th>
                                    <th>Options</th>
                                </tr>
                                <div className="division-1"></div>
                                {
                                orderedData.map((data)=>{
                                    const {_id, id, name, email, phoneNo,date,orderedItems,isDone,createdAt, updatedAt} = data
                                    if(isDone === false){
                                    const dateNtime = createdAt.split('T')
                                    const EDate = date.split('T') 
                                    return(
                                        <>
                                            <tr key={_id} className="admin-dash-data">
                                                <th>{count=count+1}</th>
                                                <th>{id}</th>
                                                <th>{dateNtime[0]}</th>
                                                <th>{name}</th>
                                                <th>{email}</th>
                                                <th>{phoneNo}</th>
                                                <th>{EDate[0]}</th>
                                                <th>
                                                    <table className="orderitems-table">
                                                        <tbody>
                                                            <tr className="admin-items-r1">
                                                                <th>Item name</th>
                                                                <th>Quantity</th>
                                                                <th>Location</th>
                                                                <th>Company</th>
                                                            </tr>
                                                            {
                                                                orderedItems.map((oi)=>{
                                                                    const {item_name, img_link, item, details, loc, comp} = oi;
                                                                    return(
                                                                        <tr>
    
                                                                            <th>{item_name}</th>
                                                                            <th>{details}</th>
                                                                            <th>{loc}</th>
                                                                            <th>{comp}</th>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </th>

                                                <th>
                                                    <button className="admin-dash-btns" onClick={()=>Open(_id)}>Open</button>
                                                    {/* <button className="admin-dash-btns" onClick={()=>HandleDone(_id)}>Done!</button> */}
                                                
                                                </th>
                                            </tr>
                                            <div className="division"></div>
                                        </>
                                        
                                    )
                                    }
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                )
            }

        </>
        )
    )
}


// status === 'adminPage'
// ?(
//     <>
//     <div className="admin-bar">
//         <ul>
//             <li className="admin-d-title">Admin Dashboard</li>
//             <h3 className="signout"><button onClick={()=>HandleSignout()}>Sign out</button></h3>
//         </ul>
//     </div>
//     <h2 className="rqts-title">Your Requests</h2>
//     {
//         orderedData.length === 0
//         ?(<h2>No New Requests</h2>)
//         :(
//             <>
//                 <table className="admin-dashtable">
//                     <tbody>
//                         <tr className="admin-dashtable-r1">
//                             <th>SNO</th>
//                             <th>ORDER ID</th>
//                             <th>EMAIL</th>
//                             <th>PHONE NO</th>
//                             <th>DATE</th>
//                             <th>ITEMS</th>
//                             <th>Options</th>
//                         </tr>
//                         <div className="division-1"></div>
//                         {
//                         orderedData.map((data)=>{
//                             const {_id, id, email, phoneNo, orderedItems, createdAt, updatedAt} = data
//                             const dateNtime = createdAt.split('T')
//                             return(
//                                 <>
//                                     <tr key={_id} className="admin-dash-data">
//                                         <th>{count=count+1}</th>
//                                         <th>{id}</th>
//                                         <th>{email}</th>
//                                         <th>{phoneNo}</th>
//                                         <th>{dateNtime[0]}</th>
//                                         <th>
//                                             <table className="orderitems-table">
//                                                 <tbody>
//                                                     <tr className="admin-items-r1">
//                                                         <th>Item name</th>
//                                                         <th>Quantity</th>
//                                                         <th>Location</th>
//                                                         <th>Company</th>
//                                                     </tr>
//                                                     {
//                                                         orderedItems.map((oi)=>{
//                                                             const {item_name, img_link, item, details, loc, comp} = oi;
//                                                             return(
//                                                                 <tr>

//                                                                     <th>{item_name}</th>
//                                                                     <th>{details}</th>
//                                                                     <th>{loc}</th>
//                                                                     <th>{comp}</th>
//                                                                 </tr>
//                                                             )
//                                                         })
//                                                     }
//                                                 </tbody>
//                                             </table>
//                                         </th>

//                                         <th>
//                                             <button className="admin-dash-btns" onClick={()=>openCalci(_id)}>Open Calci</button>
//                                         </th>
//                                     </tr>
//                                     <div className="division"></div>
//                                 </>
                                
//                             )
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </>
//         )
//     }

// </>
// )
// :(
//     <>
//     <h1 className="admin-title">Admin page</h1>
//     <center>
//         <div className="admin-signin-body">
//             <h2 className="admin-signin-title">Sign in</h2>
//             <p className="info">Please enter the details to sign in.</p>
//             <div className="admin-signin-details">
//                 <form onSubmit={SubmitHandler}>
//                     <table>
//                         <tbody>
//                             <tr>
//                                 <th>Email:</th>
//                                 <input className="email" 
//                                 type="email" 
//                                 name="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e)=>setEmail(e.target.value)}
//                                 ></input>
//                             </tr>
//                             <br></br>
//                             <tr>
//                                 <th>Password:</th>
//                                 <input className="password" 
//                                 type="password"
//                                 name="password" 
//                                 id="password"
//                                 value={password}
//                                 onChange={(e)=>setPassword(e.target.value)}
//                                 ></input>
//                             </tr>
//                         </tbody>
//                     </table>
//                     <button type="submit" className="admin-signin-btn">Sign in</button>
//                 </form>
//                 <p>{webStatus}</p>
//             </div>
//         </div>
//     </center>
//     </>
// )