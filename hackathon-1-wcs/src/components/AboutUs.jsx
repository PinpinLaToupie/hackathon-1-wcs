import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <video autoPlay muted loop className="background-video">
        <source src="./aboutus.mp4" type="video/mp4" />
      </video>
      <Link to="/">
        <div className="aboutus-button">
          <img src="./home-picto-05.png" alt="home" />
        </div>
      </Link>
    </div>
  );
}

export default AboutUs;
