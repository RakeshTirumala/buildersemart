import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './Nav.js';
// import Nav from './Nav.js'
import Title from './Title.js';
// import AltCmt from '../images/AltCmt.jpeg'

export default function CementPage(){
    const [cmtData, setcmtData] = useState(null);
    // const dispatch = useDispatch()
    const fetchCMTdata = async() =>{
        const response = await axios
        .get('https://emartserver.herokuapp.com/api/cmtpageitems/seed')
        .catch((err)=>{
            console.log("Err",err)
        })
        // dispatch(AggItems(response.data.createdAGGItems))
        setcmtData(response.data.createdCMTItems);
    }
    useEffect(()=>{
        fetchCMTdata()
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
                <h1 className='cement-title'>Cement</h1>
                {
                    (cmtData === null)
                    ?(<h2>Loading...</h2>)
                    :(
                        <section className="Items_List">
                        {cmtData.map((item) => {
                            return (
                            <Link to={`/cmtitem/${item._id}`} key={item._id}><Item item={item}></Item></Link>
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
                    <h1 className='agg-title'>Cement</h1>
                    {
                        (cmtData === null)
                        ?(<h2>Loading...</h2>)
                        :(
                            <section className="Items_List2">
                                {cmtData.map((item) => {
                                    return (
                                    <Link to={`/item/${item._id}`} key={item._id}><Item2 item={item}></Item2></Link>
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
            <img src={img_link} alt="Sorry, image not found!">
            </img>
    
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