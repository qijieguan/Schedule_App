import { BsAlarm } from 'react-icons/bs';


const Home = () => {

    const SideToggle = () => {
        const nav = document.querySelector(".side-panel");
        nav.classList.toggle("side-active");
    }

    const onMove = () => {
        document.getElementById('home').style.backgroundColor="purple";
        document.getElementsByClassName('aboutBtn')[0].style.backgroundColor="purple";
        document.getElementsByClassName('aboutBtn')[1].style.backgroundColor="purple";
    }

    const onLeave = () => {
        document.getElementById('home').style.backgroundColor="rgb(56, 56, 56)"
        document.getElementsByClassName("aboutBtn")[0].style.backgroundColor="rgb(56, 56, 56)";
        document.getElementsByClassName("aboutBtn")[1].style.backgroundColor="rgb(56, 56, 56)";
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
                    <button className="aboutBtn"
                        onClick={() => {window.location.href="http://localhost:3000/about"}}
                    >About Scheduler</button>
                    <button className="aboutBtn"
                        onClick={() => {window.location.href="http://localhost:3000/profile"}}
                    >About Me</button>
                    <BsAlarm
                        className="alarm-clock"
                        onClick={SideToggle}
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
    fontWeight: 'bold',
    fontFamile: 'fantasy'
}

const wordStyle2 = {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamile: 'fantasy'
}


const customStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}

export default Home;