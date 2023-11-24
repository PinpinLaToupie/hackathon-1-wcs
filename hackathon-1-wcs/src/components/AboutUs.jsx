import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <Link to="/">
        <div className="aboutus-button">
          <img src="./home-picto-05.png" alt="home" />
        </div>
      </Link>
      <video autoPlay muted loop className="background-video">
        <source src="./aboutus.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default AboutUs;
