import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Modal from "./Modal.js";
import '../index.css'
import Title from "./Title";


export default function AdminCalci(){

    const location = useLocation();
    const ID = location.pathname.split('/')[3];
    

    const [order, setOrder] = useState(null);

    const fetchOrdereddata = async() =>{
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/ordereditems/${ID}`)
        
        setOrder(data);

    }
    useEffect(()=>{
        fetchOrdereddata()
    },[])

    // console.log("Order:", order);

    // var ratesArrQty = [];
    // var sum = 0;
    // const Calculate=()=>{
    //     order.orderedItems.map((itm)=>{
    //         const qty = parseInt(itm.qty);
    //         const id = `rateof${itm.item}`;
    //         const x =  document.getElementById(id).value;
    //         ratesArrQty.push(parseInt(x)*qty);
    //     })

        
    //     for(let i=0;i<ratesArrQty.length;i++){
    //         sum+=ratesArrQty[i];
    //     }
    //     // console.log("rates Array:", ratesArrQty)
    //     // console.log("sum of the (rates X quantity):", sum);
    //     // console.log("Transport charge:", trans);
        
    //     const transportR = document.getElementById('transportR').value;
    //     document.getElementById('grandTotal').value = parseInt(transportR)+parseInt(sum);

    // }

    // const [isOpen, setisOpen] = useState(false);
    // const [Email, setEmail] = useState("xyz@gmail.com");

    // const openEmailWin=(email)=>{
    //     setisOpen(true)
    //     setEmail(email)
    // }


    return(
        <>
        <Title/>
            <h1 className="admin-calci-title">Admin Order Calculator</h1>
            <div className="calci-body">
                {
                    (order === null)
                    ?(<h2>Loading...</h2>)
                    :(
                        <>
                        <section className="calci-body-head">
                            <div>
                                <h3>Name:{order.name}</h3>
                                <h3>Email: {order.email}</h3>
                                <h3>Phone No: {order.phoneNo}</h3>
                                <h3>Exp.Del Date: {order.date.split('T')[0]}</h3>
                            </div>
                        </section>
                        <section className="calci-body-main">
                            <table>
                                <tbody>
                                    <tr className="calci-table-r1">
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Location</th>
                                        <th>Company</th>
                                        {/* <th>Mat.Rate</th> */}
                                    </tr>
                                    {
                                        order.orderedItems.map((itm)=>{
                                            const {item_name, item, details, loc, comp} = itm;
                                            return(
                                                <tr className="calci-order-tr">
                                                    <th>{item_name}</th>
                                                    <th>{details}</th>
                                                    <th>{loc}</th>
                                                    <th>{comp}</th>
                                                    {/* <th><input type="text" 
                                                    className="rate"
                                                    id={`rateof${item}`}
                                                    name={`rateof${item}`}
                                                    ></input></th> */}
                                                    {/* <th><input type="text"
                                                    className="transport"
                                                    id={`transof${item}`}
                                                    name={`transof${item}`}
                                                    ></input>
                                                    </th> */}
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </section>
                        <br/>
                        {/* Transport Charge: <input type="text" className="transport" id='transport'></input>
                        <div className="division-1"></div>
                        Transport Rate: <input type="text" className="transportR" id='transportR'></input>
                        <br></br>
                        <div className="division-1"></div>
                        Grand Total: <input type ="text" className="grandTotal" id="grandTotal"></input>
                        <br/>
                        <div className="division-1"></div>
                        <button className="calculate">Calculate</button>
                        <button  onClick={()=>openEmailWin(order.email)} className="OpenEmailWin">Open Email</button> */}
                        </>
                    )
                }
            </div>
            {/* <Modal open={isOpen} 
            onClose={()=>setisOpen(false)}
            >
                {
                    <>
                        <div className="EmailMainBody">
                            <tr>
                                To: <input 
                                className="EmailAddress" 
                                type="email"
                                value={Email}
                                ></input>

                                Subject: <input
                                className="EmailSubject"
                                value="Your Request Details"
                                ></input>
                            </tr>
                            <tr>
                                <div>
                                    Body:
                                    <input 
                                    className="MailBody"
                                    type="text"
                                    >
                                    </input>
                                </div>
                                <input className="Mailfile" type="file"></input>
                            </tr>
                        </div>
                        
                    </>
                    
                }
            </Modal> */}
        </>
    )

}



