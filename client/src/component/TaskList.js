import { useState, useEffect } from 'react';
import { AiFillPushpin, AiOutlineCheck } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import { GoIssueOpened } from 'react-icons/go';
import uuid from 'react-uuid';


const List = ({ list, onDelete, onAdd }) => {

    const [showAddBar, setShowAddBar] = useState(false); 
    const [Task, setTask] = useState("");
    const [Render, setRender] = useState(false);

    useEffect(() => {
    }, [Render])

    const handleAddTask = () => {
        if (!showAddBar) {
            setShowAddBar(true);
        }
        else {
            setShowAddBar(!showAddBar);
            list.Tasks = [...list.Tasks, {id: uuid(), Content: Task, Status: false}];
            onAdd(list);
            setTask("");
        }
    }

    const handleChange = event => {
        setTask(event.target.value);
    }

    const handleStatus = (taskID) => {
        list.Tasks.forEach(task => {
            if (task.id === taskID) {
                task.Status = !task.Status;   
            }
        });
        onAdd(list);
        setRender(!Render);
    }

    return (
        <div className="List">
            <div className="List-Header">
                <div/><div/>
                Task List
                <AiFillPushpin
                    color="red"
                    size={30}
                    onClick={() => onDelete(list.id)}
                />
            </div>
            <div className="List-Body">
                {list.Tasks.length > 0 ?
                    <ul className="Task-UL">
                        {list.Tasks.map(task => 
                            <li key={task.id} className="Task-Li" 
                                onClick={() => handleStatus(task.id)}
                            >
                                {task.Content}
                                {task.Status ? 
                                    <AiOutlineCheck
                                        color="green"
                                        size={22}
                                        style={iconStyle}
                                    />
                                    :
                                    <GoIssueOpened
                                        color="blue"
                                        size={22}
                                        style={iconStyle}    
                                    />
                                }
                            </li>
                        )}
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
                        onChange={handleChange}
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

const iconStyle = {
    marginLeft: '5px',
}

const inputStyle = {
    marginLeft: '15px',
    height: '35px',
    width: '70%'
}

export default List;