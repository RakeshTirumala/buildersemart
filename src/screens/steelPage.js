import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import Nav from './Nav.js'
import "../index.css"
import Title from "./Title.js";

export default function SteelPage(){
    const [stlItems, setStlItems] = useState(null);
    const fetchAGGdata = async() =>{
        const {data} = await axios
        .get('https://emartserver.herokuapp.com/api/stlpageitems/seed')
        .catch((err)=>{
            console.log("Err",err)
        })
        setStlItems(data.createdSTLItems)
    }
    useEffect(()=>{
        fetchAGGdata()
    },[])
    
    return(
        <>
        <Title/>
        <Nav/>
        <h1 className='cement-title'>Steel</h1>
        {
            stlItems===null
            ?(<h1>Loading...</h1>)
            :(
                <section className="Items_List">
                {stlItems.map((item) => {
                    return (
                    <Link to={`/stlitem/${item._id}`} key={item._id}><Item item={item}></Item></Link>
                    )
                })
                }
                </section>
            )
        }
        </>
    )
}

const Item = (props)=>{

    const {item_name, img_link} = props.item
    
    return (
        <div className="Item">
            <img src={img_link} alt="Loading..."></img>
    
            <h1>{item_name}</h1>
    
        </div>
    
    )}