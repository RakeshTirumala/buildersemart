import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css"
import companyData from "./companies";
import NavBar from './Nav.js'
import Title from "./Title";
import useWindowSize from "./WindowSize";


export default function ItemScreen(){
    const [inputValue1, setinputValue1] = useState('Tons: ')
    const [inputValue2, setinputValue2] = useState('')
    const inputValue3 = 'HSC'
    const inputValue4 = 'Agg'
    const [AGGdata, setAGGdata] = useState([]);
    const Id = useParams();
    const navigate = useNavigate();

    const fetchData = async()=>{
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/aggpageitems/${Id.id}`)
        setAGGdata(data)
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const addToRfqHandler=()=>{
        // navigate(`/yourrfq/${Id.id}?qty=${inputValue1}?loc=${inputValue2}?comp=${inputValue3}?B=${inputValue4}`)
        navigate('/yourrfq', {state:{id:Id.id, details:[inputValue1], loc:inputValue2, comp:inputValue3, B:inputValue4}})
    } 

    // console.log("aggdata",AGGdata)

    // var [Width,SetWidth] = useState(500);
    // const { width } = useWindowSize();

    // useEffect(()=>{
    //     SetWidth(width)
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
                <table className="item_table" key={AGGdata._id}>
                    <tbody>
                        <tr>
                            <th><img src={AGGdata.img_link}></img></th>
                            <th className="col2">
                                <h1 className="col2">{AGGdata.item_name}</h1>
                                <p className="agg_p1">Enter the Required Quantity (Tons):</p>
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
                                {
                                    companyData.aggComp.map((comp)=>{
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
                <table className="item_table2" key={AGGdata._id}>
                    <tbody>
                        <tr>
                            <th><img className="itemImgPh" src={AGGdata.img_link}></img></th>
                        </tr>
                        <tr>
                            <th className="col2_2">
                                <h1 className="col2_2">{AGGdata.item_name}</h1>
                                <p className="agg_p1">Enter the Required Quantity (Tons):</p>
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
                                        companyData.aggComp.map((comp)=>{
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

