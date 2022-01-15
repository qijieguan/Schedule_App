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
                    <h1 style={wordStyle1}>Good {message}, Visitor!</h1> 
                    Let's start planning your day on a digital calender or write them down!<br/><br/> 
                    <span style={wordStyle2}>For more information, select the about options below! </span>
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

const wordStyle1 = {
    fontSize: '50px',
    fontFamile: 'fantasy'
}

const wordStyle2 = {
    fontSize: '20px',
    fontFamile: 'fantasy'
}

const customStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    overflowY: 'hidden',
    height: '100px'
}

export default Home;