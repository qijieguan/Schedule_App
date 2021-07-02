import { BsAlarm } from 'react-icons/bs';


const Home = () => {

    const SideToggle = () => {
        const nav = document.querySelector(".side-panel");
        nav.classList.toggle("side-active");
    }

    return(
        <div className="home">
            <p style={customStyle}>
                Hello! I am Qi Jie. Do you need to be on top of your schedule? Use Scheduler! 
                For more information, click the About tab on the menu! 
            </p>
            <BsAlarm
                className="alarm-clock"
                onClick={SideToggle}
            />
        </div>
    );
};

const customStyle = {
    position: 'absolute', 
    top: '60px',
    fontSize: '32px',
    fontWeight: 'bold',
    width: '60%',
    marginTop: '12%'
};

export default Home;