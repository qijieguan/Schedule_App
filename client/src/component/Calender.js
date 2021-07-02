import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Date from './Date.js';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from './actions/index';


const Calender = () => {

    const DateArray = useSelector(state => state.dateArray);
    const dispatch = useDispatch();

    const onUpdate = (date) => {
        DateArray.forEach(element => {
            if (element.Day === date.Day) {
                element = date;
            }
        });
        dispatch(setDate(DateArray));
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link to='/' style={{width: '50px'}}>
                <BiArrowBack style={customStyle}/>
            </Link>
            <div className="Calender">
                <div className="Month-Label">
                    January
                </div>
                <div className="Week">
                    <div className="Week-Label">Sunday</div>
                    <div className="Week-Label">Monday</div>
                    <div className="Week-Label">Tuesday</div>
                    <div className="Week-Label">Wednesday</div>
                    <div className="Week-Label">Thursday</div>
                    <div className="Week-Label">Friday</div>
                    <div className="Week-Label">Saturday</div>
                </div>
                <div className="Date-Grid">
                    {DateArray.map(date => 
                        <Date key={date.Day} date={date}
                            onUpdate={onUpdate}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

const customStyle = {
    fontSize: '60px',
    color: 'darkorange',
    margin: '5px 0 5px 20px',
}

export default Calender;