import { AiOutlineMenu } from 'react-icons/ai';

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
            <div className="Side-Panel"/>
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

export default Header;