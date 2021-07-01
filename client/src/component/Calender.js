import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Date from './Date.js';


const Calender = () => {


    const [dates, setDates] = useState([]);

    useEffect(() => {
        let details = [];
        for (let i = 0; i < 31; ++i) {
            details.push({Day: (i + 1), Slot: []});
        }
        setDates(details);
    }, []);

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link to='/' style={{width: '50px'}}>
                <BiArrowBack style={customStyle}/>
            </Link>
            <div className="Calender">
                <div className="Month-Label">
                    January
                </div>
                <div className="Week">
                    <div className="Week-Label">Sunday</div>
                    <div className="Week-Label">Monday</div>
                    <div className="Week-Label">Tuesday</div>
                    <div className="Week-Label">Wednesday</div>
                    <div className="Week-Label">Thursday</div>
                    <div className="Week-Label">Friday</div>
                    <div className="Week-Label">Saturday</div>
                </div>
                <div className="Date-Grid">
                    {dates.map(date => <Date key={date.Day} date={date}/>)}
                </div>
            </div>
        </div>
    );
}

const customStyle = {
    fontSize: '60px',
    color: 'darkorange',
    margin: '5px 0 5px 20px',
}

export default Calender;