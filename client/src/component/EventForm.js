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
           let startM = document.getElementById('startM').value;
           let endM = document.getElementById('endM').value; 
           return addEvent({Time: [startTime, startM, endTime, endM], Content: details});
        }
    } 

    return(
        <div className="add-slot">
            <div style={flexBox}>
                <div> <span style={AddLogo}>Add Event </span> <FaLeaf style={iconStyle1}/></div>
                <AiFillCloseSquare style={iconStyle2} onClick={() => onAdd(false)}/>
            </div>
            <div className="time-format" style={marginStyle}>
                <div style={{display: 'flex'}}>
                    <span style={{margin: '5px 5px 0 0'}}>Time:  </span>
                    <span style={{display: 'block'}}>
                        <input style={inputStyle} 
                            name="start"
                            onChange={handleChange}
                            value={startTime}
                            placeholder="0:00"
                        />
                        <select id="startM" style={selectStyle}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                        <span style={{marginLeft: '5px'}}> to </span>
                        <input style={inputStyle}
                            name="end"
                            onChange={handleChange}
                            value={endTime}
                            placeholder="0:00"
                        />
                        <select id= "endM"style={selectStyle}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="event-input" style={marginStyle}>
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

const iconStyle1 = {
    fontSize: '24px',
    color: 'darkorchid',
    cursor: 'pointer'
}

const iconStyle2 = {
    fontSize: '24px',
    marginLeft: '25px',
    color: 'red',
    cursor: 'pointer'
}

const marginStyle = {
    margin: '10px 0 15px 15px'
}

const inputStyle = {
    width: '70px', 
    height: '30px'
}

const selectStyle = {
    width: '60px', 
    height: '34px'
}

const flexBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px 0 10px 60px'
}

export default AddForm;