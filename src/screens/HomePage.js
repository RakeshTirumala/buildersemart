import React, { useEffect} from "react";
import '../index.css'
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import {setItems} from '../redux/actions/ItemActions'
import Nav from './Nav.js'
import { SliderData } from "./SliderData";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Title from "./Title";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import useWindowSize from "./WindowSize";
import NavBar from "./Nav.js";



export default function LoadItems(){
    const dispatch = useDispatch()
    
    const fetchHPIdata = async() =>{
        const response = await axios
        .get('https://emartserver.herokuapp.com/api/homepageitems/seed')
        .catch((err)=>{
            console.log("Err",err)
        })
        dispatch(setItems(response.data.createdHPItems))
    }
    useEffect(()=>{
        fetchHPIdata()
    }, [])

    const HPItems = useSelector((state)=>state.allItems.items);
    console.log(HPItems)
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current+1)

    }
    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1 : current-1)
    }

 
    var Width;
    const { width } = useWindowSize();
    
    useEffect(()=>{
        Width = width
    }, [Width])


    // let autoScroll = true;
    // let slideInterval;
    // let intervalTime = 7000;

    // function auto(){
    //     slideInterval = setInterval(nextSlide, intervalTime)
    // }
    // useEffect(()=>{
    //     if (autoScroll){
    //         auto()
    //         autoScroll = false
    //     }
    //     return ()=> clearImmediate(slideInterval);
    // }, [current])

    return (
        <>
        <Title/>
        <NavBar/>
        {
            Width>=950
            ?(
            <section className="slider"> 
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                {
                    SliderData.map((img, index)=>{
                        return(
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {
                                    index === current && (
                                        <img alt="Loading..." src={img.image} className="sld-image"></img>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </section>
            )
            :(
                <section className="slider-ph"> 
                    <FaArrowAltCircleLeft className="left-arrow-ph" onClick={prevSlide}/>
                    <FaArrowAltCircleRight className="right-arrow-ph" onClick={nextSlide}/>
                    {
                        SliderData.map((img, index)=>{
                            return(
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    {
                                        index === current && (
                                            <img alt="Loading..." src={img.image} className="sld-image-ph"></img>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </section>
            )
        }
        <div className="HomeItemsDiv">
        <h1 className="material-tag">~ Material ~</h1>
                {
                    Width>=950
                    ?(
                        <>
                            <center className="productslist">
                                {
                                    HPItems.map((item)=>{
                                        const {_id,img, ItemName, AvailableIn, PageLink} = item;  
                                        return(
                                            <Link to={PageLink} className="HomeItem">
                                            <div key={_id}>
                                                <div className="product" key={_id}>
                                                    <img src={img}></img>
                                                    <h1>{ItemName}</h1>
                                                    <h4>Available in: {AvailableIn}</h4>
                                                </div>
                                            </div>
                                            </Link>
                                        )
                                        })
                                }
                            </center>
                    </>
                    )
                    :(
                        <>
                        <center>
                            <section className="productslist2">
                                {
                                    HPItems.map((item)=>{
                                        const {_id,img, ItemName, AvailableIn, PageLink} = item;  
                                        return(
                                            <Link to={PageLink} className="HomeItem2">
                                            <div key={_id}>
                                                <div className="product2" key={_id}>
                                                    <img src={img}></img>
                                                    <h1>{ItemName}</h1>
                                                    <h4>Available in: {AvailableIn}</h4>
                                                </div>
                                            </div>
                                            </Link>
                                        )
                                        })
                                }
                            </section>
                        </center>
                        </>
                    )
                }
                
        </div>
        {
            Width>=960
            ?(
                <section className="bottom-info">
                <center>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <div className="comp-address">
                                        <h3>Company Address:</h3>
                                        <p>Door No: 10-11-175/RF3, Venkateshwara colony, Hyderabad</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="comp-address">
                                        <h3>Customer Service</h3>
                                        <p>Email: buildersemart@gmail.com</p>
                                        <p>Ph.no: +91 9441144566</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="comp-address">
                                        <h3>Feedback</h3>
                                        <i>Your feedback will be helpful for us to improve the website :)</i>
                                        <br></br>
                                        <Link to="/feedback">Feedback</Link>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </center>
                </section>
            )
            :(
                <section className="bottom-info-2">
                <center>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <div className="comp-address">
                                        <h3>Company Address:</h3>
                                        <p>Door No: 10-11-175/RF3, Venkateshwara colony, Hyderabad</p>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="comp-address">
                                        <h3>Customer Service</h3>
                                        <p>Email: buildersemart@gmail.com</p>
                                        <p>Ph.no: +91 9441144566</p>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="comp-address">
                                        <h3>Feedback</h3>
                                        <i>Your feedback will be helpful for us to improve the website :)</i>
                                        <br></br>
                                        <Link to="/feedback">Feedback</Link>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </section>
            )
        }
        {/* <section className="bottom-info">
            <center>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <div className="comp-address">
                                    <h3>Company Address:</h3>
                                    <p>Door No: 10-11-175/RF3, Venkateshwara colony, Hyderabad</p>
                                </div>
                            </th>
                            <th>
                                <div className="comp-address">
                                    <h3>Customer Service</h3>
                                    <p>Email: buildersemart@gmail.com</p>
                                    <p>Ph.no: +91 9441144566</p>
                                </div>
                            </th>
                            <th>
                                <div className="comp-address">
                                    <h3>Feedback</h3>
                                    <i>Your feedback will be helpful for us to improve the website :)</i>
                                    <br></br>
                                    <Link to="/feedback">Feedback</Link>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </center>
        </section> */}
        </>
    )
}

