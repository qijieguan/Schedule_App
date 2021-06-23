import { BsAlarm } from 'react-icons/bs';

const Home = () => {

    const SideToggle = () => {
        const nav = document.querySelector(".Side-Panel");
        nav.classList.toggle("Side-Active");
        console.log("Side menu clicked!");
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={customStyle}>
                Hello! Do you need to be on top of your schedule? Use Scheduler!
            </div>
            <BsAlarm
                style={iconStyle}
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

const iconStyle = {
    color: 'black',
    fontSize: '250px',
    top: '400px',
    position: 'absolute',
    cursor: 'pointer'
}

export default Home;