import { useState, useEffect } from 'react';
import { AiFillPushpin, AiOutlineCheck } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import { GoIssueOpened } from 'react-icons/go';
import { RiRefreshLine } from 'react-icons/ri';
import uuid from 'react-uuid';


const List = ({ list, onDelete, onAdd }) => {

    const [showAddBar, setShowAddBar] = useState(false); 
    const [Task, setTask] = useState("");
    const [Render, setRender] = useState(false);

    useEffect(() => {}, [Render])

    const handleAddTask = () => {
        if (!showAddBar) {setShowAddBar(true);}
        else {
            setShowAddBar(!showAddBar);
            list.Tasks = [...list.Tasks, {id: uuid(), Content: Task, Status: false}];
            onAdd(list);
            setTask("");
        }
    }

    const handleChange = event => {setTask(event.target.value);}

    const handleStatus = (taskID) => {
        list.Tasks.forEach(task => {if (task.id === taskID) {task.Status = !task.Status;}});
        onAdd(list);
        setRender(!Render);
    }

    const handleColor = () => {
        if (list.Color[0] === "darkorange") {
            list.Color[0] = "cornflowerblue"
            list.Color[1] = "rgb(150, 200, 255)";
            list.Color[2] = "1px solid cornflowerblue"
            list.Color[3] = '1px 1px 1px cornflowerblue';
        }
        else if (list.Color[0] === "cornflowerblue"){
            list.Color[0] = "green"
            list.Color[1] = "lightgreen"
            list.Color[2] = "1px solid green";
            list.Color[3] = "1px 1px 1px green";
        }
        else if (list.Color[0] === "green") {
            list.Color[0] = "darkviolet"
            list.Color[1] = "violet"
            list.Color[2] = "1px solid darkviolet";
            list.Color[3] = "1px 1px 1px darkviolet";
        }
        else if (list.Color[0] === 'darkviolet') {
            list.Color[0] = "goldenrod"
            list.Color[1] = "gold"
            list.Color[2] = "1px solid goldenrod";
            list.Color[3] = "1px 1px 1px goldenrod";
        }
        else {
            list.Color[0] = "darkorange"
            list.Color[1] = "rgb(250, 200, 120)"
            list.Color[2] = "1px solid darkorange";
            list.Color[3] = "1px 1px 1px darkorange";
        }
        onAdd(list);
        setRender(!Render);
    }

    const onMove = () => {
        document.getElementById(list.id).style.boxShadow = `3px 4px 5px ${list.Color[0]}, -2px 2px 4px ${list.Color[0]}`;
    }

    const onLeave = () => {document.getElementById(list.id).style.boxShadow = list.Color[3];}

    return (
        <div className="list" id={list.id}
            style={{
                background: list.Color[1], 
                border: list.Color[2],
                boxShadow: list.Color[3]
            }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            >
            <div className="list-header">
                <RiRefreshLine style={{margin: '5px 0 0 5px'}}
                    size={24}
                    color= {list.Color[0]}
                    onClick={() => handleColor()}
                />
                Task List
                <AiFillPushpin color="red" size={30} onClick={() => onDelete(list.id)}/>
            </div>
            <div className="list-body">
                {list.Tasks.length > 0 ?
                    <ul className="task-ul">
                        {list.Tasks.map(task => 
                            <li key={task.id} className="task-li" onClick={() => handleStatus(task.id)}>
                                {task.Content}
                                {task.Status ? 
                                    <AiOutlineCheck style={iconStyle} color="green" size={22}/>
                                    :
                                    <GoIssueOpened style={iconStyle}  color="blue" size={22}/>
                                }
                            </li>
                        )}
                    </ul>
                :""}
            </div>
            <div className="list-footer">
                {showAddBar ? 
                    <input style={inputStyle} placeholder="Enter new task here..."
                        value={Task}
                        onChange={handleChange}
                    />
                    : ""
                }
                <FaPencilAlt style={{marginBottom: "10px"}} className='list-footer-li' 
                    onClick={handleAddTask} 
                    color="limegreen" 
                    size={26}
                />  
            </div>
        </div>     
    );
}

const iconStyle = {
    marginLeft: '5px',
}

const inputStyle = {
    height: '35px',
    width: '70%'
}

export default List;