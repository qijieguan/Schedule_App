import { useState } from 'react';

const ViewEvent = ({ event }) => {

    const [viewItem, setViewItem] = useState(false);

    return (
        <div>
            <div className="Slot" 
                onMouseOver={() => setViewItem(true)} 
                onMouseLeave={() => setViewItem(false)}
            >
                <span>{event.Time[0]} to {event.Time[1]}</span>
            </div>
            {viewItem ?
                <div className="Slot-Expand">
                    <div style={{marginBottom: '20px'}}> 
                        <span style={fontStyle}>Time: </span>   
                        {event.Time[0]} to {event.Time[1]}
                    </div>
                    <div> 
                        <span style={fontStyle}>Details: </span>   
                        {event.Details}
                    </div>
                </div>
                :
                ""
            }
        </div>
    );
} 

const fontStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
}

export default ViewEvent;