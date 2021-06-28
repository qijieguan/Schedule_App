import { useState } from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import ViewEvent from './ViewEvent.js';
import AddEvent from './AddEvent.js';

const Date = ({ date }) => {
    
    const [addItem, setAddItem] = useState(false);

    const onAdd = (isAdd) => {
        setAddItem(isAdd);
    }

    return(
        <div className="Date">
            <div style={flexBox}>
                <div style={{marginLeft: '5px', fontSize: '20px'}}>{date.Day}</div>
                <BiCommentAdd style={IconStyle1} onClick={() => setAddItem(true)}/>
            </div>
            { addItem ?
                <AddEvent onAdd={onAdd}/>
                :
                ""
            }
            {date.Slot.map(event => <ViewEvent key={event.id} event={event}/>)}
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