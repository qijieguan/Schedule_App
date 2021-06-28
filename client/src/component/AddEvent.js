import { AiFillCloseSquare } from 'react-icons/ai';

const AddEvent = ({ onAdd }) => {
    return(
        <div className="Add-Slot">
            <AiFillCloseSquare style={IconStyle2} onClick={() => onAdd(false)}/>
            <div className="time-input" style={marginStyle}>
                <span>Time:  </span>
                <input style={{width: '70px', height: '30px'}} 
                    placeholder="0:00"
                />
                <span> to </span>
                <input style={{width: '70px', height: '30px'}}
                    placeholder="0:00"
                />
            </div>
            <div className="event-detail" style={marginStyle}>
                <span>Details: </span>
                <textarea 
                    placeholder="Enter event detail..."
                />
            </div>
            <div className="two-btn">
                <button className="cancel-btn" onClick={() => onAdd(false)}>Cancel</button>
                <button className="submit-btn" onClick={() => onAdd(false)}>Submit</button>
            </div>
        </div>        
    );
}

const IconStyle2 = {
    fontSize: '24px',
    padding: '10px 0 0 215px',
    color: 'red'
}

const marginStyle = {
    margin: '0 0 15px 10px'
}

export default AddEvent;