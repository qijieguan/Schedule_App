import { useState } from 'react';
import Clock from './Clock.js';

const Home = () => {

    const [message, setMessage] = useState("");

    
    const getTime = (time) => {
        let result;

        if (time[0] >= 0 && time[0] < 12 && time[1] === "AM") {result = "morning"}
        if (time[0] >= 12 && time[0] < 6 && time[1] === "PM") {result = "afternoon"}
        if (time[0] >= 6 && time[0] < 12 && time[1] === "PM") {result = "evening"}
        setMessage(result);
    }

    return(
        <div className="home" id="home">
            <div className='overlay'/>
            <div className="intro">
                <div className='intro-text'>
                    <h1 style={{fontSize: '50px'}}>Good {message}, Visitor!</h1> 
                    Let's start planning your day on a digital calender or write them down!<br/><br/> 
                    <span style={{fontSize: '20px'}}>For more information, select the about options below! </span>
                </div>
                <br/><br/>
                <div style={customStyle}>
                    <div/>
                    <button className="about-btn"
                        onClick={() => {window.location.href="/about"}}
                    >About Scheduler</button>
                    <button className="about-btn"
                        onClick={() => {window.location.href="/profile"}}
                    >About Me</button>
                </div>
            </div>
            <Clock getTime={getTime}/>
        </div>
    );
};

const customStyle = {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '100px',
    width: '100%',
    overflowY: 'hidden',
}

export default Home;