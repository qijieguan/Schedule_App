import { useState } from 'react';

const ViewEvent = ({ event, onDelete }) => {

    const [viewItem, setViewItem] = useState(false);
    
    return (
        <div className="Slot-Container"
            onMouseOver={() => setViewItem(true)} 
            onMouseLeave={() => setViewItem(false)}
        >
            <div className="Slot">
                <span>{event.Time[0]} to {event.Time[1]}</span>
            </div>
            {viewItem ?
                <div className="Slot-Expand">
                    <div style={{marginBottom: '20px', width: '100%'}}> 
                        <span style={fontStyle}>Time: </span>   
                        {event.Time[0]} to {event.Time[1]}
                    </div>
                    <div style={heightStyle}> 
                        <span style={fontStyle}>Details: </span>   
                        {event.Details}
                    </div>
                    <button style={buttonStyle} onClick={() => onDelete(event.id)}>Delete</button>
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
}

const fontStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
}

const buttonStyle = {
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

export default ViewEvent;