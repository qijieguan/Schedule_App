import { useState, useEffect } from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import ViewEvent from './ViewEvent.js';
import AddEvent from './AddEvent.js';
import uuid from 'react-uuid';

const Date = ({ date }) => {
    
    const [isAdd, setIsAdd] = useState(false);
    const [event, setEvent] = useState(date.Slot);

    useEffect(() => {

    }, [event])

    const onAdd = (isAdd) => {
        setIsAdd(isAdd);
    }

    const addEvent = (item) => {
        let detail = event;
        detail.push(item);
        setEvent(detail);
        setIsAdd(false);
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
                date.Slot.map(event => <ViewEvent key={uuid()} event={event}/>)
                :
                ""
            }
        </div>
    );
}


const IconStyle1 = {
    fontSize: '24px',
    color: 'gray'
}

const flexBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}
export default Date;