
const About = () => {
    return(
        <div className="about-container">
            <div className="about-app">
                <div className="about-header">
                    About Scheduler
                </div>
                <p className="about-body">
                    Not many understand that time is money. It is difficult to use time effectively without 
                    solid planning. Consequently, poor time management is a huge factor in leading to a 
                    non-productive life for many individuals. Health is also compromised from lack of sleep and 
                    overloading stress due to time mismanagement. To reverse the effects of bad time management 
                    and inactivity, Scheduler is being developed with a vision in mind. Scheduler is a tool that
                    will assist with time management for modern students and adults. Success and happiness are 
                    achievable with a future plan. Use Scheduler today and begin taking control of your time! 
                </p>
            </div>
            <div className="about-me">
                <div className="about-header" style={{color: 'black'}}>
                    About Me
                </div>
                <p className="about-body" style={{color: 'black'}}>
                    I was a former student who earned a bachelor's degree in Computer Science from University of California, 
                    Riverside in 2020. Post graduation, I made my venture into web development and continued building web 
                    projects using Javascript and CSS. My frontend framework consists of React, React-Native, Node.js. 
                    Design bases of my web projects are multiple-page, hook logic, functional components, and Redux. My primary 
                    backend framework includes Express and MySQL. I am capable of building server connection with databases 
                    and recreate login functionalities with JWT. Currently, I am seeking for paid employment to contribute as a 
                    frontend developer.  
                </p>
            </div>
        </div>
    );
}

export default About;