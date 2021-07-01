

const About = () => {
    return(
        <div className="About-Container">
            <div className="About-App">
                <div className="About-Header">
                    About Scheduler
                </div>
                <p className="About-Body">
                    Not many understand that time is money. It is difficult to use time effectively without 
                    solid planning. Consequently, poor time management is a huge factor in leading to a 
                    non-productive life for many individuals. Health is also compromised from lack of sleep and 
                    overloading stress due to time mismanagement. To reverse the effects of bad time management 
                    and inactivity, Scheduler is being developed with a vision in mind. Scheduler is a tool that
                    will assist with time management for modern students and adults. Success and happiness are 
                    achievable with a future plan. Use Scheduler today and begin taking control of your time! 
                </p>
            </div>
            <div className="About-Me">
                <div className="About-Header" style={{color: 'black'}}>
                    About Me
                </div>
                <p className="About-Body" style={{color: 'black'}}>
                    A former student who earned a bachelor's degree in Computer Science from University of California, 
                    Riverside in 2020. Post graduation, I have ventured into web development and started building web 
                    projects using Javascript and CSS. The tools I use to design frontend UI include React, React-Native, 
                    Node.js. My primary backend tools are Express and MySQL. I am capable of building server connection 
                    with database and recreate login functionalities with JWT. Currently, I am seeking employment to work 
                    in a professional environment as a frontend developer.
                </p>
            </div>
        </div>
    );
}

export default About;