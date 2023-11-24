import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import Playginmusic from "./Music.jsx";
import Popup from "./Popup.jsx";

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <header className="header">
        <img className="logo" src="LogoV2.png" alt="Logo" />
        <h1>Ugly Christmas Jumper Maker</h1>
        <nav className="header-nav">
          <ul className="possibilities">
            <Link to="/">
              <div className="panier-button">
                <img
                  src="./panier.png"
                  onClick={() => setButtonPopup(true)}
                  alt="Panier"
                  aria-hidden="true"
                />
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
      <section className="popup">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="cart">
            <h3>My cart</h3>
            <img className="cart-img" src="/mon-pull.png" />
            <p>Cart Total (VAT included) : 23,75 {"\u20AC"}</p>
            <button className="achat-btn" type="button">
              Proceed to checkout
            </button>
          </div>
        </Popup>
      </section>
    </>
  );
}

export default Header;
