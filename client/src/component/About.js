
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
                <div className="about-header" style={{color: 'black', borderBottom: '1px solid gray', paddingBottom: '30px'}}>
                    About Me
                </div>
                <p className="about-body" style={{color: 'black'}}>
                    Enjoyed playing video games growing up as a kid. Witnessed the evolution of the digital media 
                    from the 2000s to present. Due to those experiences, I am influenced to learn tools to develop 
                    and experiment various web designs that can lead to enjoyable user experience. My current goal 
                    is to create colorful and vibrant web applications for the next generation.
                    <br/>
                    <button className="viewBtn"
                        onClick={() => {window.location.href="http://localhost:3000/profile"}}
                    >View Profile</button>  
                </p>
            </div>
        </div>
    );
}

export default About;