import React, { useState } from 'react'
import '../index.css'
import { MenuItems } from './NavMenu'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useWindowSize from "./WindowSize";
import { FaBars} from 'react-icons/fa';
import Agg from './AggregatesPage';
import LoadItems from './HomePage';
import CementPage from './cementPage';
import SteelPage from './steelPage';
import BricksBlocksPage from './BricksBlocksPage';


const NavBar=()=>{

  const [sideBar, setSideBar] = useState(true)

  const showSidebar = () => setSideBar(!sideBar)

  const navigate = useNavigate()
  const HandleRfqPage=()=>{
    navigate('/yourrfq', {state:{id:"", details:"", loc:"", comp:"", B:""}})
  }
  const { width } = useWindowSize();
 

  return(
    width >=950
    ?(
      <>
        <nav className="navbar">
          <div className="navbaritems">
              <ul>
                <li key={0}><a href='/'>HOME</a></li>
              {MenuItems.map((item) => {
                  const {id,title,url} = item;
                  return (
                      <li key={id}>
                      <Link to={url}>{title}</Link>
                      </li> 
                    )
            })}
            <li key={7}>
              <button onClick={()=>HandleRfqPage()} className="rfqNav">Your RFQ<ShoppingCartIcon/></button>
            </li>
            </ul>
          </div>
        </nav>
      </>
    )
    :(
      <>
        <div className='navbar-ph-div'>
          <FaBars onClick={showSidebar} className="navbar-icon"/>
        </div>
        {
          sideBar===false
          ?(
            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul>
            <li key={0}><a href='/' className="nav-homelink">HOME</a></li>
                {MenuItems.map((item) => {
                    const {id,title,url} = item;
                    return (
                      <li key={id}>
                        <Link to={url} className="nav-item">{title}</Link>
                        </li>      
                      )
              })}
              <li key={7}>
                <button onClick={()=>HandleRfqPage()} className="rfqNav">Your RFQ</button>
              </li>
            </ul>
          </nav>
          )
          :(
            <></>
          )
        }
      </>
    )
  )
    // return(
    // <>
    // <nav className="navbar">
    //   <div className="navbaritems">
    //       <ul>
    //         <li key={0}><a href='/'>HOME</a></li>
    //       {MenuItems.map((item) => {
    //           const {id,title,url} = item;
    //           return (
    //               <li key={id}>
    //                 <Link to={url}>{title}</Link>
    //                 </li>
                    
    //       )
    //     })}
    //     <li key={7}>
    //       <button onClick={()=>HandleRfqPage()} className="rfqNav">Your RFQ<ShoppingCartIcon/></button>
    //     </li>
    //     </ul>
    //   </div>
    // </nav>
    // </>
    // )
}

export default NavBar;