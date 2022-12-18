import pic from "../images/Picture3.png"
import "../components/custombox.css"
function Custombox(){
    return(
        <div className="custombox">
            <img src={pic}></img>
            <div className="customright">
                <h1>Custom Solutions for Your Business</h1>
                <div className="customplatforms">
                    <p>Platforms</p>
                    <button>Web</button>
                    <button>Ios</button>
                    <button>Android</button>
                </div>
                <p>Our expertise in e-commerce, adtech/martech, and people-to-people fields as well as other business areas helps us develop web and mobile solutions tailored with care for our clients. You can come to us at any stage of your project - from just an idea to architecture, from development to quality assurance and support.</p>
                <button>sdfghj</button>
            </div>
        </div>
    )
}

export default Custombox