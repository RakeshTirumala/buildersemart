import React from 'react'
import '../index.css'
import { MenuItems } from './NavMenu'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const NavBar=()=>{

  const navigate = useNavigate()
  const HandleRfqPage=()=>{
    navigate('/yourrfq', {state:{id:"", details:"", loc:"", comp:"", B:""}})
  }

    return(
    <>
    <nav className="navbar">
      <div className="navbaritems">
          <ul>
            {/* <li key={0}><a href='/'>HOME</a></li> */}
          {MenuItems.map((item) => {
              const {id,title,url} = item;
              return (
                  <li key={id}>
                    <a href={url}>{title}</a>
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
}

export default NavBar;