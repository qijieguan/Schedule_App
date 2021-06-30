import { useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { FaLeaf } from 'react-icons/fa';


const AddForm = ({ onAdd, addEvent }) => {

    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");
    const [details, setDetails] = useState("");

    const handleChange = event => {
        if (event.target.name === "start") {
            setStartTime(event.target.value);
        }
        else if (event.target.name === "end") {
            setEndTime(event.target.value);
        }
        else {
            setDetails(event.target.value);
        }
    }

    const handleSubmit = () => {
        if (!startTime || !endTime || !details) {}
        else {
           return addEvent({Time: [startTime, endTime], Details: details});
        }
    }

    return(
        <div className="Add-Slot">
            <div style={flexBox}>
                <div> <span style={AddLogo}>Add Event </span> <FaLeaf style={IconStyle1}/></div>
                <AiFillCloseSquare style={IconStyle2} onClick={() => onAdd(false)}/>
            </div>
            <div className="time-input" style={marginStyle}>
                <span>Time:  </span>
                <input style={{width: '70px', height: '30px'}} 
                    name="start"
                    onChange={handleChange}
                    value={startTime}
                    placeholder="0:00"
                />
                <span> to </span>
                <input style={{width: '70px', height: '30px'}}
                    name="end"
                    onChange={handleChange}
                    value={endTime}
                    placeholder="0:00"
                />
            </div>
            <div className="event-detail" style={marginStyle}>
                <span>Details: </span>
                <textarea 
                    name="details"
                    onChange={handleChange}
                    value={details}
                    placeholder="Enter event detail..."
                />
            </div>
            <div className="two-btn">
                <button className="cancel-btn" onClick={() => onAdd(false)}>Cancel</button>
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>        
    );
}

const AddLogo = {
    fontSize: '20px',
    color: 'darkorchid',
}

const IconStyle1 = {
    fontSize: '24px',
    color: 'darkorchid',
    cursor: 'pointer'
}

const IconStyle2 = {
    fontSize: '24px',
    marginLeft: '25px',
    color: 'red',
    cursor: 'pointer'
}

const marginStyle = {
    margin: '0 0 15px 10px'
}

const flexBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px 0 10px 60px'
}

export default AddForm;