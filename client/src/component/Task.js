import { useState, useEffect } from 'react';
import CreateTaskList from './ListCreate.js';
import List from './TaskList.js';
import uuid from 'react-uuid';

const Task = () => {

    const [ListArray, setListArray] = useState([]);

    useEffect(() => {

    }, [ListArray]);

    const onCreate = () => {
        setListArray([...ListArray, {id: uuid(), Tasks: []}])
    }

    return(
        <div>
            <div className="Task-Container">
                <CreateTaskList onCreate={onCreate}/>
                {
                    ListArray.length > 0 ?
                    ListArray.map(list => <List key={list.id} list={list}/>)
                    :
                    ""
                }
            </div>
        </div>
    );
};

export default Task;