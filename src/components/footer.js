import "./footer.css"
import pic from "../images/Native Island-logos.jpeg"

function Foot() {
    return(
        <footer>
            <div className="upperfooter">
                <h1>Connect to Native Island</h1>
                <button><i className="fa-solid fa-phone-flip"></i> Make a Call</button>
            </div>
            <div className="lowerfooter">
                <div className="footerdesc">
                    <span><img src={pic}></img> <h5>Native Island</h5></span>
                    <p>Native Island is a web and app development company that turns your ideas into a new driving force of your business. We hire brilliant mobile app and web developers to deliver projects on time and maintain the top-notch code standards. Native Island dream, architect, design and develop. But more than that, we are a team of passionate people driven by one relentless pursuit- to craft innovative solutions and deliver unparalleled results.</p>
                </div>
                <div>
                    <h5>Social Medias</h5>
                    <div className="socialmedfooter">
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100088670056881"><i className="fa-brands fa-facebook"></i></a>
                       <a href=""> <i className="fa-brands fa-twitter"></i></a>
                       <a href="https://www.linkedin.com/company/native-island/about/"><i className="fa-brands fa-linkedin"></i></a> 
                    </div>
                </div>
                <div>
                    <h5>Technologies</h5>
                    <p>Kotlin</p>
                    <p>Swift</p>
                    <p>React</p>
                </div>
                <div>
                    <h5 className="footercontact" id="contactus">Contact</h5>
                    <p><i className="fa-solid fa-phone-flip"></i> <a href="tel:903-449-6886">+91 903-449-6886</a></p>
                    <p><i className="fa-solid fa-envelope"></i> <a href="mailto:yournativeisland@gmail.com">yournativeisland@gmail.com</a></p>
                    <p><i className="fa-solid fa-location-dot"></i> Gurgaon, Haryana</p>
                </div>
            </div>
            <div className="copyright">
                © 2021 Copyright:  <a href="https://nativeisland.netlify.app/">Nativeisland.com</a>
            </div>
        </footer>
    )
}

export default Foot