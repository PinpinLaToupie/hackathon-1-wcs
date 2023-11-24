import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import Playginmusic from "./Music.jsx";
import Popup from "./Popup.jsx";

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
    setButtonPopup(true);
  };

  return (
    <>
      <header className="header">
        <img className="logo" src="LogoV2.png" alt="Logo" />
        <h1>Ugly Christmas Jumper Maker</h1>
        <nav className="header-nav">
          <ul className="possibilities">
            <Link to="/">
              <div className="panier-button" onClick={handleAddToCart}>
                <img src="./panier.png" alt="Panier" aria-hidden="true" />
                <span className="cart-count">
                  {cartCount > 0 ? cartCount : null}
                </span>
              </div>
            </Link>
            <Link to="/">
              <div className="home-button">
                <img src="./home-picto-05.png" alt="Home" />
              </div>
            </Link>
          </ul>
          <Playginmusic />
        </nav>
      </header>
      <section className="popup">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="cart">
            <h3 className="titleMoula">My cart</h3>
            <img className="cart-img" src="/mon-pull.png" />
            <p className="textMoula">
              Cart Total (VAT included) : 2399,99 {"\u20AC"}
            </p>
            <p>PAS CHER !</p>
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
