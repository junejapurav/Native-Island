import pic1 from "../images/Picture1.jpg"
import pic2 from "../images/Picture2.jpg"
import '../components/slider.css'

const Slider = ()=>{
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 mypics" src={pic1} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block captionn">
      <h1>Remodeling Mobile Experience</h1>
      <p>We put disruption in top gear by helping you create exceptional experiences.</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 mypics" src={pic2} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block captionn">
      <h1>Remodeling Mobile Experience</h1>
      <p>We put disruption in top gear by helping you create exceptional experiences.</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 mypics" src={pic1} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block captionn">
      <h1>Remodeling Mobile Experience</h1>
      <p>We put disruption in top gear by helping you create exceptional experiences.</p>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}

export default Slider