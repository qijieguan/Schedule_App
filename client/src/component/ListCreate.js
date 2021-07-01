import { AiFillPlusCircle } from 'react-icons/ai';

const CreateTaskList = ({ onCreate }) => {

    return(
        <div className="Create-List" onClick={() => onCreate()}>
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
    fontWeight: 'bold',
    color: 'gray',
}

export default CreateTaskList;