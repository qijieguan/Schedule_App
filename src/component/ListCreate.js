import { AiFillPlusCircle } from 'react-icons/ai';


const CreateTaskList = ({ onCreate }) => {

    return(
        <div className="create-list" onClick={() => onCreate()}>
            <AiFillPlusCircle
                color="gray"
                size={40}
            />
            <span style={customStyle}>Create Task List</span>
        </div>
    );
}

const customStyle = {
    fontSize: '20px',
    color: 'gray',
}

export default CreateTaskList;