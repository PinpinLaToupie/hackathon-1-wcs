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
      </nav>
    </header>
  );
}

export default Header;
