import { useState } from 'react';


const ViewEvent = ({ event, onDelete, onEdit }) => {

    const [viewItem, setViewItem] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [details, setDetails] = useState(event.Content);

    const handleEdit = event => {
        setDetails(event.target.value);
    }

    const handleSubmit = async () => {
        await setIsEdit(false);
        onEdit({id: event.id, Content: details});
    }

    return (
        <div className="slot-container"
            onMouseOver={() => setViewItem(true)} 
            onMouseLeave={() => setViewItem(false)}
        >
            <div className="slot">
                <span style={{display: 'flex'}}>{event.Time[0]} {event.Time[1]} to {event.Time[2]} {event.Time[3]}</span>
            </div>
            {viewItem ?
                <div className="slot-expand">
                    <div style={{marginBottom: '20px', width: '100%', color: 'black'}}> 
                        <span style={fontStyle}>Time: </span>   
                        {event.Time[0]} {event.Time[1]} to {event.Time[2]} {event.Time[3]}
                    </div>
                    <div style={heightStyle}> 
                        <span style={fontStyle}>Details: </span>
                        {isEdit ? 
                            <textarea
                                value={details}
                                onChange={handleEdit}
                                placeholder="Enter new details..."
                            />
                            :  
                            details
                        }   
                    </div> 
                    {isEdit ?
                        <button className="btn" style={buttonStyle3} onClick={handleSubmit}>Confirm</button>
                        :
                        <div style={flexBox}>
                            <button className="btn" style={buttonStyle1} onClick={() => onDelete(event.id)}>Delete</button>
                            <button className="btn" style={buttonStyle2} onClick={() => {setIsEdit(true)}}>Edit</button>
                        </div>
                    }   
                </div>
                :
                ""
            }
        </div>
    );
} 

const heightStyle = {
    minHeight: '100px',
    height: 'auto',
    color: 'black',
}

const fontStyle = {
    fontSize: '16px',
    color: 'black'
}

const flexBox = {
    display: 'flex',
    justifyContent: 'space-around',
}

const buttonStyle1 = {
    fontSize: '14px',
    fontWeight: 'bold',
    height: '30px',
    width: '60px',
    color: 'white',
    backgroundColor: 'red',
    border: '0',
    borderRadius: '5px',
    boxShadow: '0 0 3px 0 black',
    cursor: 'pointer'
}

const buttonStyle2 = {
    marginRight: '100px',
    fontSize: '14px',
    fontWeight: 'bold',
    height: '30px',
    width: '60px',
    color: 'white',
    backgroundColor: 'blue',
    border: '0',
    borderRadius: '5px',
    boxShadow: '0 0 3px 0 black',
    cursor: 'pointer'
}

const buttonStyle3 = {
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    height: '30px',
    width: '70px',
    color: 'white',
    backgroundColor: 'green',
    border: '0',
    borderRadius: '5px',
    boxShadow: '0 0 3px 0 black',
    cursor: 'pointer'
}

export default ViewEvent;