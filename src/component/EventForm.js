import { useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { FaLeaf } from 'react-icons/fa';


const AddForm = ({ onAdd, addEvent }) => {

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [details, setDetails] = useState("");

    const handleChange = event => {
        if (event.target.name === "startTime") {setStartTime(event.target.value);}
        else if (event.target.name === "endTime") {setEndTime(event.target.value);}
        else {setDetails(event.target.value);}
    }

    const handleSubmit = () => {
        if (!startTime || !endTime) {return}
        console.log(startTime + " to " + endTime);
        let start = startTime.split(":");
        let end = endTime.split(":");
        let sPeriod = "AM";
        let ePeriod = "AM";
        start = start.map((x) => parseInt(x)); 
        end = end.map((x) => parseInt(x));

        
        if (start[0] >= 12) {
            if (start[0] > 12) {start[0] = start[0] - 12}
            sPeriod = "PM"
        }

        if (end[0] >= 12) {
            if (end[0] > 12) {end[0] = end[0] - 12}
            ePeriod = "PM"
        }

        if (start[0] === 0) {start[0] = start[0] + 12}
        if (end[0] === 0) {end[0] = end[0] + 12}

        start[0] = (start[0]).toString().padStart(2,0); 
        start[1] = (start[1]).toString().padStart(2,0); 
        end[0] = (end[0]).toString().padStart(2,0);
        end[1] = (end[1]).toString().padStart(2,0);  

        start = (start[0].toString() + ":" + start[1]);
        end = (end[0].toString() + ":" + end[1])

        addEvent({Time: [start, sPeriod, end, ePeriod], Content: details});
    } 

    return(
        <div className="add-slot">
            <AiFillCloseSquare style={{alignSelf: 'flex-end', margin: '7px 7px 0 0'}} 
                color='red' 
                size={24}
                onClick={() => onAdd(false)}
            />
            <div>
                <span style={{marginRight: '5px', fontSize: '20px', color: 'orange'}}>Add Event</span> 
                <FaLeaf color='limegreen' size={24}/>
            </div>
            
            <div className="time-format" style={customStyle}>
                <h1 style={{color: 'orange'}}>Time:</h1>
                <div style={{marginLeft: "2.5%", display: 'flex', justifyContent: 'space-evenly', width: '95%'}}>
                    <input type='time' style={inputStyle} name="startTime" min="01:00" max="12:59" 
                        onChange={handleChange}
                        value={startTime}
                    />
                    <div style={{width: '30px', color: 'orange', textAlign: 'center'}}>to</div>
                    <input type='time' style={inputStyle} name="endTime" min="01:00" max="12:59" 
                        onChange={handleChange}
                        value={endTime}
                    />
                </div>
            </div>
            <div className="event-input" style={customStyle}>
                <h1 style={{color: 'orange'}}>Details:</h1>
                <textarea name="details" placeholder="Enter event detail..." 
                    onChange={handleChange} 
                    value={details}
                    style={{marginLeft: '2.5%', width: '95%'}}
                />
            </div>
            <div className="two-btn">
                <button className="cancel-btn" style={{background: 'red'}} onClick={() => onAdd(false)}>Cancel</button>
                <button className="submit-btn" style={{background: 'darkorchid'}} onClick={handleSubmit}>Submit</button>
            </div>
        </div>        
    );
}

const customStyle = {
    fontSize: '18px',
    width: '96%'
}

const inputStyle = {
    width: '108px', 
    height: '30px',
    borderRadius: '0'
}

export default AddForm;