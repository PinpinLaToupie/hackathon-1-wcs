import { Link } from "react-router-dom";
import './Page404.css';

function Page404() {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <div>
      <p>Oops the grinch stole your sweaters !</p>
      <img className="img404" src="/grinch.png" alt="Grinch" />
      <Link to="/">
        <button type="button" className="button404">
          Go back to home
        </button>
      </Link>
    </div>
  );
}

export default Page404;
