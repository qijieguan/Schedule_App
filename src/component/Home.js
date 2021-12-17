import { BsAlarm } from 'react-icons/bs';


const Home = () => {

    const onMove = () => {
        document.getElementById('home').style.backgroundColor="purple";
        document.getElementsByClassName('about-btn')[0].style.backgroundColor="purple";
        document.getElementsByClassName('about-btn')[1].style.backgroundColor="purple";
    }

    const onLeave = () => {
        document.getElementById('home').style.backgroundColor="rgb(56, 56, 56)"
        document.getElementsByClassName("about-btn")[0].style.backgroundColor="rgb(56, 56, 56)";
        document.getElementsByClassName("about-btn")[1].style.backgroundColor="rgb(56, 56, 56)";
    }

    return(
        <div className="home" id="home">
            <div className="intro">
                <span style={wordStyle1}>Hello! I am Qi Jie.</span><br/> A front-end developer/UI Designer.  
                Striving to design impactful websites and applications.<br/><br/> 
                <span style={wordStyle2}>For more information, select the about options below! </span>
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
    overflowY: 'hidden'
}

export default Home;