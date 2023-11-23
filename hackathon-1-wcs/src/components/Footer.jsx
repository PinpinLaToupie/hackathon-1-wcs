import { Link } from "react-router-dom";

function Footer() {
  const footerStyle = {
    padding: "10px",
    textAlign: "center",
	marginTop: "15px",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <Link to="/aboutus">
          <button type="button" className="transparent-button">
            © Ugly Christmas Jumper Maker
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
