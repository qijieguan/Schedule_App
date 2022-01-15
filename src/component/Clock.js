import { useState } from 'react';

const Clock = () => {

    const [time, setTime] = useState("00:00:00 AM");
    const [period, setPeriod] = useState("Am");
    const [date, setDate] = useState("Monday, January 01, 2001");

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const updateClock = () => {
        let date = new Date();
        
        let day = date.getDay();
        let month = date.getMonth();
        let dateN = date.getDate();
        let year = date.getFullYear(); 
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let period = "AM";

        if (date < 10) {date = '0' + date}
        if (hours >= 12) {period = "PM"}
        if (hours > 12) {hours = hours - 12;}
        if (hours < 10) {hours = '0' + hours;}
        if (minutes < 10) {minutes = '0' + minutes;}
        if (seconds < 10) {seconds = '0' + seconds;}
        
        setDate(week[day] + ", " + months[month] + " " + dateN + ", " + year);
        setTime(hours + ':' + minutes + ':' + seconds + " "); 
        setPeriod(period);
    }

    const initClock = () => {window.setInterval(() => updateClock(), 1);}

    initClock();

    return(
        <div className="clock">
            <span className='clock-date'>{date}</span>
            <span className="clock-time">{time} 
                <span className='period'
                    style={{
                        color: parseInt(time.substring(0,2)) >= 12 ? 'aquamarine' : 'orange'
                    }}
                >{period}</span>
            </span>
        </div>
    )
}

export default Clock;