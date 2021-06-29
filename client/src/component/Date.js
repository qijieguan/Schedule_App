import { useState, useEffect } from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import ViewEvent from './ViewEvent.js';
import AddEvent from './AddEvent.js';
import uuid from 'react-uuid';

const Date = ({ date }) => {
    
    const [isAdd, setIsAdd] = useState(false);
    const [event, setEvent] = useState(date.Slot);

    useEffect(() => {
        console.log("render");
    }, [event])

    const onAdd = (isAdd) => {
        setIsAdd(isAdd);
    }

    const addEvent = (item) => {
        let result = event;
        item.id = uuid();
        result.push(item);
        setEvent(result);
        setIsAdd(false);
    }

    const onDelete = (eventID) => {
        let result = event;
        result = result.filter(e => e.id !== eventID);
        setEvent(result);
    }

    return(
        <div className="Date">
            <div style={flexBox}>
                <div style={{marginLeft: '5px', fontSize: '20px'}}>{date.Day}</div>
                <BiCommentAdd style={IconStyle1} onClick={() => setIsAdd(true)}/>
            </div>
            { isAdd ?
                <AddEvent onAdd={onAdd} addEvent={addEvent}/>
                :
                ""
            }
            { event.length > 0 ?
                event.map(event => <ViewEvent key={event.id} event={event} onDelete={onDelete}/>)
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