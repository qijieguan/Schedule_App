import { AiFillPushpin } from 'react-icons/ai';

const List = ({ list }) => {
    return (
        <span className="List">
            <div className="List-Header">
                <div/><div/>
                Task List
                <AiFillPushpin
                    color="red"
                    size={30}
                />
            </div>
        </span>
    );
}

export default List;