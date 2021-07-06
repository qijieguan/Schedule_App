import { useEffect } from 'react';
import CreateTaskList from './ListCreate.js';
import List from './TaskList.js';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from './actions/index'


const Task = () => {

    const ListArray = useSelector(state => state.listArray);
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const onCreate = () => {
        dispatch( 
            setList([...ListArray, {
                id: uuid(), 
                Tasks: [], 
                Color: ["darkorange", "rgb(250, 200, 120)", "1px solid darkorange", "1px 1px 1px 1px darkorange"]
            }])
        );
    }

    const onDelete = (listID) => {
        dispatch(setList(ListArray.filter(list => list.id !== listID)));
    }

    const onAdd = (list) => {
        ListArray.forEach(element => {
            if (element.id === list.id) {
                element.Tasks = list.Tasks
            }    
        });
        dispatch(setList(ListArray));
    }

    return(
        <div>
            <div className="task-container">
                <CreateTaskList onCreate={onCreate}/>
                {
                    ListArray.length > 0 ?
                    ListArray.map(list => <List key={list.id} list={list} onDelete={onDelete} onAdd={onAdd}/>)
                    :
                    ""
                }
            </div>
        </div>
    );
};

export default Task;