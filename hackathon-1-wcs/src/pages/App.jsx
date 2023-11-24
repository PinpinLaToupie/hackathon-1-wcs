import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

function App() {
  return (
    <div>
      <Carousel />
    </div>
  );
}

const Carousel = () => {
  const imgCarrousel = [
    "/pull1.png",
    "/pull2.png",
    "/pull3.png",
    "/pull4.png",
    "/pull5.png",
    "/pull6.png",
    "/pull7.png",
    "/pull8.png",
    "/pull9.png",
    "/pull10.png",
    "/pull11.png",
    "/pull12.png",
    "/pull13.png",
    "/pull14.png",
    "/pull15.png",
    "/pull16.png",
    "/pull17.png",
    "/pull18.png",
    "/pull19.png",
    "/pull20.png",
    "/pull21.png",
    "/pull22.png",
    "/pull23.png",
    "/pull24.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div>
        <h1 className="carouselTitle">Our collection</h1>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {imgCarrousel.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default App;
