import React, { useState } from "react";
import Title from "./Title";
import Nav from './Nav.js'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import '../index.css';


export default function ConfirmationPage(){

    const [email_inp, setemail_inp] = useState('')
    const [phno_inp, setphno_inp] = useState('')
    const [name, SetName] = useState('')
    const [date, SetDate] = useState('')

    const cart = useSelector((state)=>state.cart)
    const {cartItems} = cart
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToDb=(name,email_inp, phno_inp,date)=>{
        const id = 'ACS'+ Math.random().toString(16).slice(2);
        const newOrder = {id:id,name:name,email:email_inp, phoneNo:phno_inp,date:date,orderedItems:cartItems, isDone:false};
        axios.post('https://emartserver.herokuapp.com/api/orders', newOrder)
        // console.log(newOrder);
        navigate(index)
        dispatch(emptyCart(cartItems)) 
    }


    return(
        <>
            <Title/>
            <Nav/>
            <h1 className="agg-title">Confirmation</h1>
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
                    <input type={"phonenumber"} className="phno_inp"
                    id="phno_inp" 
                    name="phno_inp"
                    value={phno_inp}
                    onChange={(e)=>setphno_inp(e.target.value)}
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
                    <button type="button" 
                    className="conf_btn" 
                    onClick={()=>addToDb(name,email_inp,phno_inp,date)}>Confirm</button>
                    
                    <p className="confirm-parah">we will send the details to your mail or phone number once you click confirm</p>
                </form>
            </center>
        </>
    )
} 