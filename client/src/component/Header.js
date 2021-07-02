import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Header = () => {

    const SideToggle = () => {
        const nav = document.querySelector(".side-panel");
        nav.classList.toggle("side-active");
    }

    return (
        <div>
            <div className="header">
                <div className="logo">
                    SCHEDULER
                </div>
                <AiOutlineMenu style={customStyle} onClick={SideToggle}/>
            </div>
            <div className="side-panel" >
                <div style={borderStyle}>
                    <Link to="/" className="side-li">
                        Home
                    </Link>
                    <Link to="/calender" className="side-li">
                        Calender
                    </Link>
                    <Link to="/task" className="side-li">
                        Task
                    </Link>
                    <Link to="/about" className="side-li">
                        About
                    </Link>
                </div>
            </div>
        </div>
    );
}

const customStyle = {
    color: 'white',
    fontSize: '25px',
    left: '95%',
    position: 'absolute',
    cursor: 'pointer'
}


const borderStyle = {
    borderBottom: '1px solid',
    borderColor: 'darkorange'
}

export default Header;