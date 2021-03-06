import { useState, useEffect } from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import ViewEvent from './ViewEvent.js';
import AddForm from './EventForm.js';
import uuid from 'react-uuid';


const Date = ({ date, onUpdate }) => {
    
    const [isAdd, setIsAdd] = useState(false);
    const [Render, setRender] = useState(false);

    useEffect(() => {
       
    }, [Render]);

    const onAdd = (isAdd) => {
        setIsAdd(isAdd);
    }

    const addEvent = (item) => {
        item.id = uuid();
        date.Slot = [...date.Slot, item];
        onUpdate(date);
        setIsAdd(false);
    }

    const onDelete = (eventID) => {
        date.Slot = date.Slot.filter(e => e.id !== eventID);  
        onUpdate(date);
        setRender(!Render);
    }

    const onEdit = (edits) => {   
        date.Slot.forEach(e => {if (e.id === edits.id) { e.Content = edits.Content;}});
        onUpdate(date);
        setRender(!Render);
    }

    return(
        <div className="date">
            <div style={flexBox}>
                <div style={{marginLeft: '5px', fontSize: '20px', color: 'orange'}}>{date.Day}</div>
                <BiCommentAdd style={iconStyle} onClick={() => setIsAdd(true)}/>
            </div>
            { isAdd ? <AddForm onAdd={onAdd} addEvent={addEvent}/> : ""}
            { date.Slot.length > 0 ?
                date.Slot.map(event => <ViewEvent key={event.id} event={event} onDelete={onDelete} onEdit={onEdit}/>)
                :""
            }
        </div>
    );
}

const iconStyle = {
    fontSize: '24px',
    color: 'limegreen',
}

const flexBox = {
    display: 'flex',
    justifyContent: 'space-between',
    
}

export default Date;