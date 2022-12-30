import '../components/headerinfo.css'

function Headinfo(){
    return(
        <header>
        <div className="headerLeft">
        <div id="headerPhone"><i className="fa-solid fa-phone-flip"></i> <a href="tel:903-449-6886">+91 903-449-6886</a></div>
        <div id="headerMail"><i className="fa-solid fa-envelope"></i> <a href="mailto:bharat.juneja@proskart.com">bharat.juneja@proskart.com</a></div>
        <div id="headerLoc"><i className="fa-solid fa-location-dot"></i> Gurgaon, Haryana</div>
        </div>
        <div className="headerRight">
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100088670056881"><i className="fa-brands fa-facebook"></i></a>
            <a href=""> <i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/native-island/about/"><i className="fa-brands fa-linkedin"></i></a> 
        </div>
        
            </header>
    )
}

export default Headinfo