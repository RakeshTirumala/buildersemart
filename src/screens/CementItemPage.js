import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css"
import Nav from './Nav.js'
import companyData from "./companies";
import Title from "./Title";


export default function CmtItemScreen(){
    const [inputValue1, setinputValue1] = useState('Bags: ')
    const [inputValue2, setinputValue2] = useState('')
    const [inputValue3, setinputValue3] = useState('')
    const inputValue4 = 'Cmt'
    const [CMTdata, setCMTdata] = useState([]);
    const Id = useParams();
    const navigate = useNavigate();

    const fetchData = async()=>{
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/cmtpageitems/${Id.id}`)
        setCMTdata(data)
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const addToRfqHandler=()=>{
        navigate('/yourrfq', {state:{id:Id.id, details:[inputValue1], loc:inputValue2, comp:inputValue3, B:inputValue4}})
    } 
    // console.log(companyData)

    const mediaQuery = window.matchMedia('(min-width: 400px)')

    return (
        <>
        <Title/>
        <Nav/>
        
        {
            mediaQuery.matches
            ?(
                <>
                <table className="item_table" key={CMTdata._id}>
                    <tbody>
                        <tr>
                            <th><img src={CMTdata.img_link} className="cmt-itemscr-img" alt="Sorry, image not found!"></img></th>
                            <th className="col2">
                                <h1 className="col2">{CMTdata.item_name}</h1>
                                <p className="agg_p1">Enter the Required no. of Bags:</p>
                                <input type="text" 
                                id="inputValue1" 
                                name="inputValue1"
                                value={inputValue1}
                                onChange={(e)=>setinputValue1(e.target.value)}>
                                </input>
                                <p className="agg_p1">Enter the Location:</p>
                                <input type="text" 
                                id="inputValue2" 
                                name="inputValue2"
                                value={inputValue2}
                                onChange={(e)=>setinputValue2(e.target.value)}>
                                </input>
                                <p className="add_p1">Enter the Required Company:</p>
                                <input type="text" 
                                id="inputValue3" 
                                name="inputValue3"
                                value={inputValue3}
                                onChange={(e)=>setinputValue3(e.target.value)}>
                                </input>
                                <br/>
                                <button onClick={addToRfqHandler}  className="addToCart-btn">Add to RFQ</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
                        <h4 className="comp-tag">Companies</h4>
                        <section className="companies">
                            <table>
                                <tbody>
                                    <tr>
                                        {
                                            companyData.cmtComp.map((comp)=>{
                                                const {img, compName} = comp;
                                                return(
                                                    <>
                                                    <th className="comp-col">
                                                        <img src={img} className="comp-img"></img>
                                                        <h4>{compName}</h4>
                                                    </th>
                                                    <div></div>
                                                    </>
                                                )
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                </>
            )
            :(
                <center>
                <table className="item_table2" key={CMTdata._id}>
                    <tbody>
                        <tr>
                            <th><img className="itemImgPh" src={CMTdata.img_link}></img></th>
                        </tr>
                        <tr>
                            <th className="col2_2">
                                <h1 className="col2_2">{CMTdata.item_name}</h1>
                                <p className="agg_p1">Enter the Required Bags:</p>
                                <input type="text" 
                                id="inputValue1" 
                                name="inputValue1"
                                value={inputValue1}
                                onChange={(e)=>setinputValue1(e.target.value)}>
                                </input>

                                <p className="agg_p1">Enter the Location:</p>
                                <input type="text" 
                                id="inputValue2" 
                                name="inputValue2"
                                value={inputValue2}
                                onChange={(e)=>setinputValue2(e.target.value)}>
                                </input>
                          
                                <p className="agg_p1">Company:</p>
                                    <input
                                    type="text"
                                    id="inputValue3"
                                    name="inputValue3"
                                    value={inputValue3}
                                    onChange={inputValue3}
                                    >
                                    </input>
                                    <br/>
                                    <button onClick={addToRfqHandler}  className="addToCart-btn">Add to RFQ</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <h4 className="comp-tag">Companies</h4>
                <section className="companies">
                    <table>
                        <tbody>
                            <tr>
                                <div className="companies-ph">
                                    {
                                        companyData.cmtComp.map((comp)=>{
                                            const {img, compName} = comp;
                                            return(
                                                <>
                                                <th className="comp-col">
                                                    <img src={img} className="comp-img"></img>
                                                    <h4>{compName}</h4>
                                                </th>
                                                <div></div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </section>
                </center>
            )
        }
        </>
    )
}