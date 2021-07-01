import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {

    const SideToggle = () => {
        const nav = document.querySelector(".Side-Panel");
        nav.classList.toggle("Side-Active");
    }

    return (
        <div>
            <div className="Header">
                <div className="Logo">
                    SCHEDULER
                </div>
                <AiOutlineMenu style={customStyle} onClick={SideToggle}/>
            </div>
            <div className="Side-Panel" >
                <div style={borderStyle}>
                    <Link to="/" className="Side-Li">
                        Home
                    </Link>
                    <Link to="/calender" className="Side-Li">
                        Calender
                    </Link>
                    <Link to="/task" className="Side-Li">
                        Task
                    </Link>
                    <Link to="/about" className="Side-Li">
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