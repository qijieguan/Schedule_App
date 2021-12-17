import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <div className="nav-bar">
                <div className="logo">
                    SCHEDULER
                </div>
                <nav className="nav-menu">
                    <AiOutlineMenu style={customStyle}/>
                    <div className="nav-panel" >
                        <div>
                            <Link to="/" className="nav-li">
                                Home
                            </Link>
                            <Link to="/calender" className="nav-li">
                                Calender
                            </Link>
                            <Link to="/task" className="nav-li">
                                Task
                            </Link>
                            <Link to="/about" className="nav-li">
                                About
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

const customStyle = {
    color: 'white',
    fontSize: '25px',
    left: '95%',
    position: 'absolute',
}


export default Header;