import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom";
import {addToCart, removeFromCart} from '../redux/actions/cartActions'
import '../index.css';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import axios from "axios";
// import Nav from './Nav.js'
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import emptycart from '../images/emptycart.png'
import Title from "./Title";
import NavBar from "./Nav.js";



export default function YourRfq(){
    var Id = ""
    var details = []
    var loc = ""
    var comp = ""
    var B = ""
    // var temp2 = [];
    const location = useLocation()
    const state = location.state
    B += state.B
    comp += state.comp
    Id += state.id
    details = state.details
    loc += state.loc
    console.log("details: ", details)

    for(let idx=0;idx<details.length;idx=idx+1){
        details[idx] += "\xa0"
    }

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(addToCart(Id,details,loc,comp,B))
    },[])

    const cart = useSelector((state)=>state.cart)
    const {cartItems} = cart
    const removeItemHandler = (id)=>{
        dispatch(
            removeFromCart(id)
        )}
    
    console.log("Cart Items:", cartItems);
    // const [email_inp, setemail_inp] = useState('')
    // const [phno_inp, setphno_inp] = useState('')
    // const [name, SetName] = useState('')
    // const [date, SetDate] = useState('')

    const navigate = useNavigate()

    // const addToDb=(name,email_inp, phno_inp,date)=>{
    //     const id = 'ACS'+ Math.random().toString(16).slice(2);
    //     const newOrder = {id:id,name:name,email:email_inp, phoneNo:phno_inp,date:date,orderedItems:cartItems, isDone:false};
    //     axios.post('https://emartserver.herokuapp.com/api/orders', newOrder)
    //     // console.log(newOrder);
    //     dispatch(emptyCart(cartItems)) 
    // }

    const HandleConfirm=()=>{
        navigate('/confirmationpage')
    }

    const mediaQuery = window.matchMedia('(min-width: 400px)')

    return(
        <>
        <Title/>
        <NavBar/>
        <h1 className="agg-title">Your RFQ(s)</h1>
        {
            mediaQuery.matches
            ?(
                cartItems.length===0
                ?(
                    <center>
                        <img src={emptycart} className="emptycart-img"></img>
                        
                    </center>
                )
                :(
                    <>
                        <table className="tableRfq">
                            <tbody className="table_body">
                                <tr className="label-row">
                                    <th>Image</th>
                                    <th>Item Name</th>
                                    <th>Details</th>
                                    <th>Location</th>
                                    <th>Company/Type</th>
                                    <th>Option</th>
                                </tr>
                                {
                                    cartItems.map((Item)=>{
                                        const {item_name, img_link, item, details, loc, comp} = Item;
                                        return(
                                                <tr className="row" key={item}>
                                                    <th>
                                                        <img src={img_link} alt="Loading..."></img>
                                                    </th>
                                                    <th className="details-1">
                                                        {item_name}
                                                    </th>
                                                    <th className="details-main">
                                                        {details}
                                                    </th>
                                                    <th className="details-2">
                                                        {loc}
                                                    </th>
                                                    <th className="details-1">
                                                        {comp}
                                                    </th>
                                                    <th>
                                                        <button className="RemoveBtnRfq" 
                                                        type="button" onClick={()=>removeItemHandler(item)}>Remove
                                                        </button>
                                                    </th>
                                                </tr>
                                            )
                                    })
                                }
                            </tbody>
                        </table>
                        <br/>
                        <button className="RqtBtn" onClick={()=>HandleConfirm()}>Request</button>
                    </>
                )
            )
            :(
                cartItems.length===0
                ?(
                    <center>
                        <img src={emptycart} className="emptycart-img"></img>
                    </center>
                )
                :(
                    <>
                    <center>
                        {
                            cartItems.map((Item)=>{
                                const {item_name, img_link, item, details, loc, comp} = Item;
                                return(
                                    <table key={item} className="rfq-item-ph">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <img className="rfq-img-ph" src={img_link} alt="Loading..."></img>
                                                </th>
                                                <th>
                                                    <h4 className="rfq-name-ph">{item_name}</h4>
                                                    <h4 className="rfq-comp-ph">{comp}</h4>
                                                    <h4 className="rfq-loc-ph">{loc}</h4>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <h4 className="rfq-details-ph">{details}</h4>
                                                    <button className="RemoveBtnRfq" 
                                                    type="button" onClick={()=>removeItemHandler(item)}>Remove
                                                    </button>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                )
                            })
                        }
                    </center>
                    <button className="RqtBtn-ph" onClick={()=>HandleConfirm()}>Request</button>
                    </>
                )
            )
        }

        </>
    )}
