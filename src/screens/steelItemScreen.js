import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css"
// import Nav from './Nav.js'
import companyData from "./companies";
import Title from "./Title";
import NavBar from "./Nav.js";

export default function SteelItemScreen(){
    const [inputValue1, setinputValue1] = useState('Tons: ')
    const [inputValue2, setinputValue2] = useState('')
    const [inputValue3, setinputValue3] = useState('')
    const [inputValue5, setinputValue5] = useState('BarType: ')
    const [inputValue6, setinputValue6] = useState('Thickness: ')
    const inputValue4 = 'STL'
    const [STLdata, setSTLdata] = useState([]);
    const Id = useParams();
    const navigate = useNavigate();

    const fetchData = async()=>{
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/stlpageitems/${Id.id}`)
        setSTLdata(data)
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const addToRfqHandler=()=>{
        navigate('/yourrfq', {state:{id:Id.id, details:[inputValue1,inputValue5,inputValue6], loc:inputValue2, comp:inputValue3, B:inputValue4}})
    }
    
    const mediaQuery = window.matchMedia('(min-width: 400px)')

    return (
        <>
        <Title/>
        <NavBar/>
        {
            mediaQuery.matches
            ?(
                <>
                <table className="item_table" key={STLdata._id}>
                    <tbody>
                        <tr>
                            <th><img src={STLdata.img_link} className="cmt-itemscr-img" alt="Loading..."></img></th>
                            <th className="col2">
                                <h1 className="col2">{STLdata.item_name}</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <p className="agg_p1">Enter the Required no. of Tons:</p>
                                                <input type="text" 
                                                id="inputValue1" 
                                                name="inputValue1"
                                                value={inputValue1}
                                                onChange={(e)=>setinputValue1(e.target.value)}>
                                                </input>
                                            </th>
                                            <th>
                                                <p className="agg_p1">Enter the Bar Type(40ft):</p>
                                                <select
                                                id="inputValue5" 
                                                name="inputValue5"
                                                className="bartype"
                                                onChange={(e)=>setinputValue5(e.target.value)}>
                                                    <option>None</option>
                                                    <option>BarType: StraightBar</option>
                                                    <option>BarType: BendBar</option>
                                                </select>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p>Enter the thickeness:</p>
                                                <input type="text" 
                                                id="inputValue6" 
                                                name="inputValue6"
                                                value={inputValue6}
                                                onChange={(e)=>setinputValue6(e.target.value)}>
                                                </input>
                                            </th>
                                            <th>
                                                <p className="agg_p1">Enter the Location:</p>
                                                <input type="text" 
                                                id="inputValue2" 
                                                name="inputValue2"
                                                value={inputValue2}
                                                onChange={(e)=>setinputValue2(e.target.value)}>
                                                </input>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p className="add_p1">Enter the Required Company:</p>
                                                <input type="text" 
                                                id="inputValue3" 
                                                name="inputValue3"
                                                value={inputValue3}
                                                onChange={(e)=>setinputValue3(e.target.value)}>
                                                </input>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br/>
                                <button onClick={addToRfqHandler} className="addToCart-btn">Add to RFQ</button>
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
                                    companyData.stlComp.map((comp)=>{
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
                <table className="item_table2" key={STLdata._id}>
                <tbody>
                    <tr>
                        <th><img className="itemImgPh" src={STLdata.img_link}></img></th>
                    </tr>
                    <tr>
                        <th className="col2_2">
                            <h1 className="col2_2">{STLdata.item_name}</h1>
                            <p className="agg_p1">Enter the Required Quantity (Tons):</p>
                            <input type="text" 
                            id="inputValue1" 
                            name="inputValue1"
                            value={inputValue1}
                            onChange={(e)=>setinputValue1(e.target.value)}>
                            </input>

                            <p className="agg_p1">Enter the Bar Type(40ft):</p>
                            <select
                            id="inputValue5" 
                            name="inputValue5"
                            className="bartype"
                            onChange={(e)=>setinputValue5(e.target.value)}>
                                <option>None</option>
                                <option>BarType: StraightBar</option>
                                <option>BarType: BendBar</option>
                            </select>

                            <p>Enter the thickeness:</p>
                            <input type="text" 
                            id="inputValue6" 
                            name="inputValue6"
                            value={inputValue6}
                            onChange={(e)=>setinputValue6(e.target.value)}>
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
            <section className="companies">
                    <table>
                        <tbody>
                            <tr>
                                <div className="companies-ph">
                                    {
                                        companyData.stlComp.map((comp)=>{
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