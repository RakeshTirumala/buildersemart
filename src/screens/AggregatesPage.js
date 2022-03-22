import React, {useEffect, useState} from 'react';
import '../index.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {AggItems } from '../redux/actions/ItemActions';
import { Link } from 'react-router-dom';
// import Rfq_bar from './rfq_bar'
// import Nav from './Nav.js'
import Title from './Title';
import useWindowSize from "./WindowSize";
import NavBar from './Nav.js';
 
const Agg=()=>{
  const dispatch = useDispatch()
  const fetchAGGdata = async() =>{
      const response = await axios
      .get('https://emartserver.herokuapp.com/api/aggpageitems/seed')
      .catch((err)=>{
          console.log("Err",err)
      })
      dispatch(AggItems(response.data.createdAGGItems))
  }
  useEffect(()=>{
      fetchAGGdata()
  },[])

  const AGGdata = useSelector((state)=>state.allItems.items) 

  // const { width } = useWindowSize();
  // var [Width,SetWidth] = useState(width);

  // useEffect(()=>{
  //     if(width<950){
  //         SetWidth(width)
  //     }
  // }, [SetWidth, width])

  const mediaQuery = window.matchMedia('(min-width: 400px)')

  return (
    <>
    <Title/>
    <NavBar/>
    {
      mediaQuery.matches
      ?(
        <>
          <h1 className='agg-title'>Aggregates</h1>
          <section className="Items_List">
            {AGGdata.map((item) => {
              return (
              <Link to={`/item/${item._id}`} key={item._id}><Item item={item}></Item></Link>
              )
            })
            }
          </section>
        </>
      )
      :(
        <>
        <h1 className='agg-title'>Aggregates</h1>
        <section className="Items_List2">
          {AGGdata.map((item) => {
            return (
            <Link to={`/item/${item._id}`} key={item._id}><Item2 item={item}></Item2></Link>
            )
          })
          }
        </section>
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

export default Agg;
