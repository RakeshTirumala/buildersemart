import React, { useState } from "react";
import Title from "./Title";
// import Nav from './Nav.js'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import '../index.css';
import NavBar from "./Nav.js";


export default function ConfirmationPage(){

    const [email_inp, setemail_inp] = useState('')
    const [phno_inp, setphno_inp] = useState('')
    const [name, SetName] = useState('')
    const [date, SetDate] = useState('')

    const cart = useSelector((state)=>state.cart)
    const {cartItems} = cart
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [confirmed, SetConfirmed] = useState(false)

    const addToDb=(name,email_inp, phno_inp,date)=>{
        const id = 'ACS'+ Math.random().toString(16).slice(2);
        const newOrder = {id:id,name:name,email:email_inp, phoneNo:Number(phno_inp),date:date,orderedItems:cartItems, isDone:false};
        axios.post('https://emartserver.herokuapp.com/api/orders', newOrder)
        // console.log(newOrder);
        dispatch(emptyCart(cartItems))
        SetConfirmed(true) 
    }

    const mediaQuery = window.matchMedia('(min-width: 400px)')

    const GoHome=()=>{
        navigate('/')
    }

    const lengthCheck=(setphno_inp)=>{
        if(setphno_inp.target.value.length > setphno_inp.target.maxLength){
            setphno_inp.target.value = setphno_inp.target.value.slice(0, setphno_inp.target.maxLength)
        }
    }

    return(
        <>
            <Title/>
            <NavBar/>
            <h1 className="agg-title">Confirmation</h1>
            {
                confirmed===false
                ?(
                    mediaQuery.matches
                    ?(
                        <center>
                            <form className="confirmation-form">
                                <h3>Your name/Company name:</h3>
                                <input type="text"
                                className="email_inp"
                                id="RFQname"
                                name="RFQname"
                                value={name}
                                onChange={(e)=>SetName(e.target.value)}
                                >
                                </input>
                                <h3>Email:</h3>
                                <input type={"email"} className="email_inp"
                                id="email_inp" 
                                name="email_inp"
                                value={email_inp}
                                onChange={(e)=>setemail_inp(e.target.value)}
                                ></input>
                                <h3>Phone number</h3>
                                <input type="text" className="phno_inp"
                                id="phno_inp" 
                                name="phno_inp"
                                value={phno_inp}
                                onChange={(e)=>setphno_inp(e.target.value.replace(/\D/g, ''))}
                                maxLength="10"
                                onInput={()=>lengthCheck(setphno_inp)}
                                ></input>
                                <h3>Expected Delivery Date:</h3>
                                <input
                                className="email_inp"
                                type="date"
                                name="date"
                                id="date"
                                value={date}
                                onChange={(e)=>SetDate(e.target.value)}
                                >
                                </input>
                                <br/>
                                <a href='/'><button type="button" 
                                className="conf_btn" 
                                onClick={()=>addToDb(name,email_inp,phno_inp,date)}>Confirm</button></a>
                                
                                <p className="confirm-parah">we will send the details to your mail or phone number once you click confirm</p>
                            </form>
                        </center>
                    )
                    :(
                        <center>
                        <form className="confirmation-form-ph">
                            <h3>Your name/Company name:</h3>
                            <input type="text"
                            className="inp-ph"
                            id="RFQname"
                            name="RFQname"
                            value={name}
                            onChange={(e)=>SetName(e.target.value)}
                            >
                            </input>
                            <h3>Email:</h3>
                            <input type={"email"} className="inp-ph"
                            id="email_inp" 
                            name="email_inp"
                            value={email_inp}
                            onChange={(e)=>setemail_inp(e.target.value)}
                            ></input>
                            <h3>Phone number</h3>
                            <input type="text" className="inp-ph"
                            id="phno_inp" 
                            name="phno_inp"
                            value={phno_inp}
                            onChange={(e)=>setphno_inp(e.target.value)}
                            ></input>
                            <h3>Expected Delivery Date:</h3>
                            <input
                            className="inp-ph"
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={(e)=>SetDate(e.target.value)}
                            >
                            </input>
                            <br/>
                            <a href='/'><button type="button" 
                            className="conf_btn-ph" 
                            onClick={()=>addToDb(name,email_inp,phno_inp,date)}>Confirm</button></a>
                            
                            <p className="confirm-parah">we will send the details to your mail or phone number once you click confirm</p>
                        </form>
                        </center>
                    )
                )
                :(
                    <center>
                        <img src="https://media.istockphoto.com/vectors/paid-success-payment-approved-notice-icon-vector-flat-bill-tax-pay-vector-id1271278705?k=20&m=1271278705&s=612x612&w=0&h=0YdsBj21lQdzQU1rUE79Vp5P2HczAG0E30DZRlCT0no="></img>
                        <button onClick={()=>GoHome()} className="normal-btn">Go Back to Home</button>
                    </center>
                )
            }
        </>
    )
} 