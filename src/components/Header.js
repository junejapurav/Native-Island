import Headinfo from './headinfo'
import pic from "../images/Native Island-logos.jpg"
import "./Header.css"

function Header(){
    return(
        <div>
            <Headinfo/>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
                <a class="navbar-brand" href="#"><img src={pic}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#aboutus">About Us</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Platforms
                </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#platform">Android</a>
          <a class="dropdown-item" href="#platform">Ios</a>
          <a class="dropdown-item" href="#platform">Web</a>
          {/* <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a> */}
        </div>
      </li>
      <li class="nav-item">
                <a class="nav-link" href="#contactus">Contact Us</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder='Search' aria-label='Search'></input>
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Header