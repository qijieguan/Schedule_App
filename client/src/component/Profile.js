import { Link } from "react-router-dom";

const MyProfile = () => {

    const imgURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    return(
        <div className="profile-container">
            <div style={{border: '2px solid grey', boxShadow: '1px 1px 1px 1px grey', paddingBottom: '30px'}}>
                <div className="profile-header">
                    <img src={imgURL} alt="" style={imgStyle} className="picture"/>
                    <div className="name" style={nameStyle}>
                        Qi Jie Guan
                    </div>
                </div>
                <div className="profile-body">
                    I am venturing into web development and have built web projects using 
                    <span style={wordStyle1}> Javascript</span> and <span style={wordStyle1}>CSS</span>. My frontend stack 
                    consists of <span style={wordStyle1}>React</span>, <span style={wordStyle1}> React-Native</span>, 
                    <span style={wordStyle1}> Node.js</span>. Design bases for my web projects includes multiple-pages, hook, 
                    functional components, and <span style={wordStyle1}> Redux</span>. My primary backend stack are 
                    <span style={wordStyle1}> Express</span> and <span style={wordStyle1}>MySQL</span>. I have an understanding 
                    with procedures of server connection with databases and recreate login functionalities with JWT. Currently, 
                    I am seeking for paid employment to contribute as a frontend developer.  
                </div>
            </div>
            <br/>
            <div className="profile-footer">
                <div style={flexBox}>
                    <div style={wordStyle2}>Education: </div>
                    <div style={fontStyle}>University of California, Riverside</div>
                    <div style={fontStyle}>2015-2020</div>
                    <div style={fontStyle}>Bachelor's of Computer Science</div>
                </div>
                <div style={flexBox}>
                    <div style={wordStyle2}>Skills:</div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <ul>
                            <li style={fontStyle}>React</li>
                            <li style={fontStyle}>React-Native</li>
                            <li style={fontStyle}>Node.js</li>
                            <li style={fontStyle}>Express</li>
                            <li style={fontStyle}>MySQL</li>
                        </ul>
                        <ul>
                            <li style={fontStyle}>Firebase</li>
                            <li style={fontStyle}>Javascript</li>
                            <li style={fontStyle}>C++/C#</li>
                            <li style={fontStyle}>CSS</li>
                            <li style={fontStyle}>Git</li>
                        </ul>
                    </div>
                </div>
                <div style={flexBox}>
                    <div style={wordStyle2}>Contact:</div>
                    <ul>
                        <li style={fontStyle}>LinkedIn:  
                            <br/>
                            <span
                                style={{color: 'blue', cursor: 'pointer'}}
                                onClick={() => {window.location.href="https://www.linkedin.com/in/qi-jie-guan-002924201/"}}
                            >
                                https://www.linkedin.com/in/qi-jie-guan-002924201/
                            </span><br/><br/>
                        </li>
                        <li style={fontStyle}>Email:  
                            <br/>
                            <span style={{color: 'blue'}}>
                                qijieguan7@gmail.com
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <Link to="/pdf" className="view-file">View Resume</Link>
        </div>
    );
}

const wordStyle1 = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'indianred'
}

const wordStyle2 = {
    margin: '0 0 10px 50px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'navy'
}

const fontStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '50px',
    textAlign: 'left',
}

const flexBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '50px',
    width: '30%'
}

const imgStyle = {
    border: '1px solid gray',
    width: '200px',
    borderRadius: '100px'
}

const nameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    height: '50px',
    lineHeight: '40px'
}

export default MyProfile;