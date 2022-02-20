import axios from "axios";
import React, { useState } from "react";
import '../index.css'
import Nav from './Nav.js'
import Title from "./Title";

export default function FeedbackPage(){

    const [feedback, setFeedback] = useState('');

    const feedbackSubmit=(feedback)=>{
        const newFeedback = {Feedback:feedback};
        axios.post('https://emartserver.herokuapp.com/api/feedback', newFeedback)
    }


    return(
        <>
        <Title/>
        <Nav/>
        <center>
            <form className="feedback-form">
                <h3>FeedBack Form</h3>
                <p className="feedback-p">If you have any suggestions for the website or complaints please let us know here.</p>
                <textarea className="feedback"
                value={feedback}
                onChange={(e)=>setFeedback(e.target.value)}
                >
                </textarea>
                <button className="feedback-submit" onClick={()=>feedbackSubmit(feedback)}>Submit</button>
            </form>
        </center>
        </>
    )
}