import { BsAlarm } from 'react-icons/bs';

const Home = () => {

    const SideToggle = () => {
        const nav = document.querySelector(".Side-Panel");
        nav.classList.toggle("Side-Active");
        console.log("Side menu clicked!");
    }

    return(
        <div className="Home">
            <p style={customStyle}>
                Hello! I am Qi Jie. Do you need to be on top of your schedule? Use Scheduler! 
                For more information, click the About tab on the menu! 
            </p>
            <BsAlarm
                className="Alarm-Clock"
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