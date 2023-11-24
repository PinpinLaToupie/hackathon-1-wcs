import { Link } from "react-router-dom";
import "./header.css";
import Playginmusic from "./Music.jsx";

function Header() {
  return (
    <header className="header">
      <img className="logo" src="LogoV2.png" alt="Logo" />
      <h1>Ugly Christmas Jumper Maker</h1>
      <nav className="header-nav">
        <ul className="possibilities">
        <Link to="/">
            <div className="panier-button">
              <img src="./panier.png" alt="Panier" />
            </div>
          </Link>
          <Link to="/">
            <div className="home-button">
              <img src="./home-picto-05.png" alt="Home" />
            </div>
          </Link>{" "}
        </ul>
        <Playginmusic />
      </nav>
    </header>
  );
}

export default Header;
