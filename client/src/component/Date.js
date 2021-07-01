import { useState, useEffect } from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import ViewEvent from './ViewEvent.js';
import AddForm from './EventForm.js';
import uuid from 'react-uuid';


const Date = ({ date }) => {
    
    const [isAdd, setIsAdd] = useState(false);
    const [event, setEvent] = useState(date.Slot);

    useEffect(() => {
        if (event.length > 0) {
            console.log(event);
        } 
    }, [event]);

    const onAdd = (isAdd) => {
        setIsAdd(isAdd);
    }

    const addEvent = (item) => {
        item.id = uuid();
        let result = [...event, item];
        setIsAdd(false);
        setEvent(result);
    }

    const onDelete = (eventID) => {
        let result = event;
        result = result.filter(e => e.id !== eventID);
        setEvent(result);
    }

    const onEdit = (edits) => {    
        let result = event; 
        result.forEach(e => {
            if (e.id === edits.id) { 
                e.Content = edits.Content;
                setEvent(result);
            }
        });
    }

    return(
        <div className="Date">
            <div style={flexBox}>
                <div style={{marginLeft: '5px', fontSize: '20px'}}>{date.Day}</div>
                <BiCommentAdd style={IconStyle1} onClick={() => setIsAdd(true)}/>
            </div>
            { isAdd ?
                <AddForm onAdd={onAdd} addEvent={addEvent}/>
                :
                ""
            }
            { event.length > 0 ?
                event.map(event => 
                    <ViewEvent key={event.id} event={event} onDelete={onDelete} onEdit={onEdit}/>
                )
                :
                ""
            }
        </div>
    );
}

const IconStyle1 = {
    fontSize: '24px',
    color: 'gray',
    cursor: 'pointer'
}

const flexBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export default Date;