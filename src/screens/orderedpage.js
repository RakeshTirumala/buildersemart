import React from "react";
import '../index.css'
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

export default function Ordered(){

    const history = useNavigate();
    const backtosite=()=>{
        history.push('/');
    }

    return(
        <>
        <Title/>
            <div>
                <img 
                src="https://www.xsellco.com/resources/wp-content/uploads/2018/04/What-is-Order-Fulfillment.gif"
                alt="Loading..."
                className="ordered-img"></img>
            </div>
            <button className="backtosite-btn" onClick={()=>backtosite()}>Back to Site</button>
        </>
    )
}