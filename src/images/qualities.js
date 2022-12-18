import "./qualities.css"

function Quality(){
    return(
        <div className="qualitybox">
        <h1>Our Core Values</h1>
        <p>We’re enthusiastic learners and seasoned inventors. Together, we can create solutions that serve not just technology but the humans behind it.</p>
        <div className="qualities">
            <div className="eachquality">
                <h1>01</h1>
                <h2>Ensure impactful innovations</h2>
                <p>An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</p>
            </div>
            <div className="eachquality">
                <h1>02</h1>
                <h2>Focus on self-development</h2>
                <p>Training and mentorship programs, interactive sessions and community meetups to drive personal growth.</p>
            </div>
            <div className="eachquality">
                <h1>01</h1>
                <h2>Integrate work-life balance</h2>
                <p>Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.</p>
            </div>
        </div>
        </div>
    )
}

export default Quality