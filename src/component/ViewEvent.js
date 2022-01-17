import { useState } from 'react';


const ViewEvent = ({ event, onDelete, onEdit }) => {

    const [viewItem, setViewItem] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [details, setDetails] = useState(event.Content);

    const handleEdit = event => {setDetails(event.target.value);}

    const handleSubmit = async () => {
        await setIsEdit(false);
        onEdit({id: event.id, Content: details});
    }

    return (
        <div className="slot-container"
            onMouseOver={() => setViewItem(true)} 
            onMouseLeave={() => setViewItem(false)}
        >
            <div style={{display: 'flex', height: '30px'}}>
                <div className="slot">{event.Time[0]} {event.Time[1]} to {event.Time[2]} {event.Time[3]}</div>
            </div>
            {viewItem ?
                <div className="slot-expand">
                    <div style={{marginBottom: '20px', width: '100%', color: 'black'}}> 
                        <h1 style={fontStyle}>Time: </h1>   
                        {event.Time[0]} {event.Time[1]} to {event.Time[2]} {event.Time[3]}
                    </div>
                    <div style={heightStyle}> 
                        <h1 style={fontStyle}>Details:</h1>
                        {isEdit ? 
                            <textarea value={details} onChange={handleEdit} placeholder="Enter new details..."/>
                            : details
                        }   
                    </div> 
                    {isEdit ?
                        <button className="btn" style={Object.assign({background: 'green', width: '70px'}, buttonStyle)} onClick={handleSubmit}>Confirm</button>
                        :
                        <div style={flexBox}>
                            <button className="btn" 
                                style={Object.assign({background: 'red', width: '60px'}, buttonStyle)} 
                                onClick={() => onDelete(event.id)}
                            >Delete</button>
                            <button className="btn" 
                                style={Object.assign({background: 'blue', width: '60px'}, buttonStyle)} 
                                onClick={() => {setIsEdit(true)}}
                            >Edit</button>
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
    color: 'black',
}

const fontStyle = {
    fontSize: '16px',
    color: 'black'
}

const flexBox = {
    display: 'flex',
    justifyContent: 'space-evenly',
}

const buttonStyle = {
    height: '30px',
    color: 'white',
    border: '0',
    borderRadius: '5px',
    boxShadow: '0 0 3px black',
}

export default ViewEvent;