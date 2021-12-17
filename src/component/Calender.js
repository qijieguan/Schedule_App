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
            <Link to='/'style={{alignSelf: 'start'}}>
                <BiArrowBack style={customStyle}/>
            </Link>
            <div className="calender">
                <div className="month-label">
                    January
                </div>
                <div className="week">
                    <div className="week-label">Sunday</div>
                    <div className="week-label">Monday</div>
                    <div className="week-label">Tuesday</div>
                    <div className="week-label">Wednesday</div>
                    <div className="week-label">Thursday</div>
                    <div className="week-label">Friday</div>
                    <div className="week-label">Saturday</div>
                </div>
                <div className="date-grid">
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
    margin: '20px 0 30px 20px',
}

export default Calender;