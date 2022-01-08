import { BsAlarm } from 'react-icons/bs';


const Home = () => {

    const onMove = () => {
        document.getElementById('home').style.background="purple";
        document.getElementsByClassName('about-btn')[0].style.background="purple";
        document.getElementsByClassName('about-btn')[1].style.background="purple";
    }

    const onLeave = () => {
        document.getElementById('home').style.backgroundColor="orange"
        document.getElementsByClassName("about-btn")[0].style.background="darkorange";
        document.getElementsByClassName("about-btn")[1].style.background="darkorange";
    }

    return(
        <div className="home" id="home">
            <div className="intro">
                <div className='intro-text'>
                    <h1 style={wordStyle1}>Welcome to my schedule app!</h1> 
                    Start planning your future by on a digital calender and lists<br/><br/> 
                    <span style={wordStyle2}>For more information, select the about options below! </span>
                </div>
                <br/><br/>
                <div style={customStyle}>
                    <div/>
                    <button className="about-btn"
                        onClick={() => {window.location.href="/about"}}
                    >About Scheduler</button>
                    <button className="about-btn"
                        onClick={() => {window.location.href="/profile"}}
                    >About Me</button>
                    <BsAlarm
                        className="alarm-clock"
                        onMouseMove={onMove}
                        onMouseLeave={onLeave}
                    />
                </div>
            </div>
        </div>
    );
};

const wordStyle1 = {
    fontSize: '50px',
    fontFamile: 'fantasy'
}

const wordStyle2 = {
    fontSize: '20px',
    fontFamile: 'fantasy'
}

const customStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    overflowY: 'hidden',
    height: '100px'
}

export default Home;