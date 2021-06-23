import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {

    const SideToggle = () => {
        const nav = document.querySelector(".Side-Panel");
        nav.classList.toggle("Side-Active");
        console.log("Side menu clicked!");
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
            <div className="Side-Li">
                    <Link to="/" style={linkStyle}>
                        Home
                    </Link>
                </div>
                <div className="Side-Li">
                    <Link to="/calender" style={linkStyle}>
                        Calender
                    </Link>
                </div>
                <div className="Side-Li">TODO</div>
                <div className="Side-Li">About</div>
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

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    display: 'block'
}


export default Header;