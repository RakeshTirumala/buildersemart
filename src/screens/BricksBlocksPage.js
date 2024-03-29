import React, { useEffect, useState } from "react";
// import Nav from './Nav.js'
import '../index.css'
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "./Title.js";
import NavBar from "./Nav.js";


export default function BricksBlocksPage(){
    const [bnbData, setbnbData] = useState(null);
    const fetchBBdata = async() =>{
        const response = await axios
        .get('https://emartserver.herokuapp.com/api/bricksblocks/seed')
        .catch((err)=>{
            console.log("Err",err)
        })
        setbnbData(response.data.createdBBItems);
    }
    useEffect(()=>{
        fetchBBdata()
    },[])

    const mediaQuery = window.matchMedia('(min-width: 400px)')

    return(
        <>
        <Title/>
        <NavBar/>
        {
            mediaQuery.matches
            ?(
                <>
                <h1 className='cement-title'>Bricks and Blocks</h1>
                {
                    (bnbData === null)
                    ?(<h2>Loading...</h2>)
                    :(
                        <section className="Items_List">
                        {bnbData.map((item) => {
                            return (
                            <Link to={`/bnbitem/${item._id}`} key={item._id}><Item item={item}></Item></Link>
                            )
                        })
                        }
                        </section>
                    )
                }
                </>
            )
            :(
                <>
                <h1 className='agg-title'>Bricks and Blocks</h1>
                {
                    (bnbData === null)
                    ?(<h2>Loading...</h2>)
                    :(
                        <section className="Items_List2">
                        {bnbData.map((item) => {
                          return (
                          <Link to={`/bnbitem/${item._id}`} key={item._id}><Item2 item={item}></Item2></Link>
                          )
                        })
                        }
                      </section>
                    )
                }
                </>
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

const Item2 = (props)=>{

    const {item_name, img_link} = props.item
    
    return (
        <div className="Item2">
            <img src={img_link} alt="Loading..."></img>
    
            <h1>{item_name}</h1>
    
        </div>
    
    )}