import { useState, useEffect } from 'react';
import CreateTaskList from './TaskForm.js';
import List from './TaskList.js';
import uuid from 'react-uuid';

const Task = () => {

    const [TaskList, setTaskList] = useState([]);

    useEffect(() => {

    }, [TaskList]);

    const onAdd = () => {
        setTaskList([...TaskList, {id: uuid()}])
    }

    return(
        <div>
            <div className="Task-Container">
                <CreateTaskList onAdd={onAdd}/>
                {
                    TaskList.length > 0 ?
                    TaskList.map(list => <List key={list.id} list={list}/>)
                    :
                    ""
                }
            </div>
        </div>
    );
};

export default Task;