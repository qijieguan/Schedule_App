import { useState, useEffect } from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import uuid from 'react-uuid';

const List = ({ list }) => {

    const [showAddBar, setShowAddBar] = useState(false); 
    const [Task, setTask] = useState("");
    const [TaskList, setTaskList] = useState(list.Tasks);

    useEffect(() => {
        console.log(TaskList);
    }, [TaskList])

    const handleAddTask = () => {
        if (!showAddBar) {
            setShowAddBar(true);
        }
        else {
            setShowAddBar(!showAddBar);
            setTaskList([...TaskList, {id: uuid(), Content: Task}]);
            setTask("");
        }
    }

    const handleOnChange = event => {
        setTask(event.target.value);
    }

    return (
        <div className="List">
            <div className="List-Header">
                <div/><div/>
                Task List
                <AiFillPushpin
                    color="red"
                    size={30}
                />
            </div>
            <div className="List-Body">
                {TaskList.length > 0 ?
                    <ul className="Task-UL">
                        {TaskList.map(task => <li key={task.id} className="Task-Li">{task.Content}</li>)}
                    </ul>
                    :
                    ""
                }
            </div>
            <div className="List-Footer">
                {showAddBar ? 
                    <input
                        placeholder="Enter new task here..."
                        style={inputStyle}
                        value={Task}
                        onChange={handleOnChange}
                    />
                    :
                    <div/>
                }
                <FaPencilAlt
                    onClick={handleAddTask}
                    color="green"
                    size={30}
                    style={{marginRight: '12px'}}
                />  
            </div>
        </div>     
    );
}

const inputStyle = {
    marginLeft: '15px',
    height: '35px',
    width: '70%'
}

export default List;