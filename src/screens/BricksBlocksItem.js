import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from './Nav.js'
import Title from "./Title.js";
// import companyData from "./companies";

export default function BBItemScreen(){
    const [inputValue1, setinputValue1] = useState('Pieces: ')
    const [inputValue2, setinputValue2] = useState('')
    const [inputValue3, setinputValue3] = useState('')
    const [inputValue5, setinputValue5] = useState('Size: ')
    // const [inputValue6, setinputValue6] = useState('')
    const inputValue4 = 'BNB'
    const [BBdata, setBBdata] = useState([]);
    const Id = useParams();
    const navigate = useNavigate();

    console.log("Id:", Id.id)

    const fetchData = async()=>{
        const {data} = await axios.get(`https://emartserver.herokuapp.com/api/bricksblocks/${Id.id}`)
        setBBdata(data)
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const addToRfqHandler=()=>{
        // navigate(`/yourrfq/${Id.id}?dtl=${inputValue1}|${inputValue5}?loc=${inputValue2}?comp=${inputValue3}?B=${inputValue4}`)
        navigate('/yourrfq', {state:{id:Id.id, details:[inputValue1,inputValue5], loc:inputValue2, comp:inputValue3, B:inputValue4}})
    }
    
    
    return (
        <>
        <Title/>
        <Nav/>
        {
            <table className="item_table" key={BBdata._id}>
                <tbody>
                    <tr>
                        <th><img src={BBdata.img_link} className="cmt-itemscr-img" alt="Loading..."></img></th>
                        <th className="col2">
                            <h1 className="col2">{BBdata.item_name}</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            <p className="agg_p1">Enter the Required no. of Pieces:</p>
                                            <input type="text" 
                                            id="inputValue1" 
                                            name="inputValue1"
                                            value={inputValue1}
                                            onChange={(e)=>setinputValue1(e.target.value)}>
                                            </input>
                                        </th>
                                        <th>
                                            <p className="agg_p1">Select Required Size:</p>
                                            <select
                                            id="inputValue5" 
                                            name="inputValue5"
                                            className="size"
                                            onChange={(e)=>setinputValue5(e.target.value)}>
                                                <option>None</option>
                                                <option>Size: 4x8x24(IN)</option>
                                                <option>Size: 6x8x24(IN)</option>
                                                <option>Size: 8x8x24(IN)</option>
                                                <option>Size: 9x8x24(IN)</option>
                                                <option>Size: 100x200x600(MM)</option>
                                                <option>Size: 150x200x600(MM)</option>
                                                <option>Size: 200x200x600(MM)</option>
                                                <option>Size: 225x200x600(MM)</option>
                                            </select>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Enter the Company/Type:</p>
                                            <input type="text" 
                                            id="inputValue3" 
                                            name="inputValue3"
                                            value={inputValue3}
                                            onChange={(e)=>setinputValue3(e.target.value)}>
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
                                </tbody>
                            </table>
                            <br/>
                            <button onClick={addToRfqHandler}>Add to RFQ</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        }

        {/* <h4 className="comp-tag">Companies</h4>
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
        </section> */}
        </>
    )
}