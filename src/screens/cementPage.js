import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from './Nav.js'
import Title from './Title.js';
import AltCmt from '../images/AltCmt.jpeg'

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

    console.log("Cement data:", cmtData);

    return(
        <>
        <Title/>
            <Nav/>
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