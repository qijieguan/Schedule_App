import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Calender = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link to='/' style={{width: '50px'}}>
                <BiArrowBack style={customStyle}/>
            </Link>
            <div className="Calender">
                <div className="month">
                    January
                </div>
            </div>
        </div>
    );
}

const customStyle = {
    fontSize: '60px',
    color: 'white',
    marginTop: '30px',
    backgroundColor: 'green',
    borderRadius: '10px',
    boxShadow: '0 0 10px 0 black'
}

export default Calender;