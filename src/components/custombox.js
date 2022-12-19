import pic from "../images/Picture3.png"
import "../components/custombox.css"
function Custombox(){
    return(
        <div className="custombox" id="platform">
            <img src={pic}></img>
            <div className="customright">
                <h1>Custom Solutions for Your Business</h1>
                <div className="customplatforms">
                    <p>Platforms</p>
                    <button id="#web">Web</button>
                    <button id="ios">Ios</button>
                    <button id="android">Android</button>
                </div>
                <p>Our expertise in e-commerce, adtech/martech, and people-to-people fields as well as other business areas helps us develop web and mobile solutions tailored with care for our clients. You can come to us at any stage of your project - from just an idea to architecture, from development to quality assurance and support.</p>
                <a href="#contactus"><button>Contact Us</button></a>
            </div>
        </div>
    )
}

export default Custombox