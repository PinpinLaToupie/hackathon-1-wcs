import "./header.css";

function Header() {
  return (
    <header className="header">
      <img className="logo" src="LogoV2.png" alt="Logo" />
      <h1>Ugly Christmas Jumper Maker</h1>
      <nav className="header-nav">
        <ul className="possibilities">
          <li>Accueil</li>
        </ul>

        <img
          id="soundbutton"
          src="./src/assets/motifs/son.png"
          alt="haut-parleur"
        />
      </nav>
    </header>
  );
}

export default Header;
