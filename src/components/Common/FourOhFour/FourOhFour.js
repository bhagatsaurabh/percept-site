import { Link, useLocation } from "react-router-dom";

import "./FourOhFour.css";
import { notFoundIcon } from "assets/icons";

function FourOhFour() {
  const location = useLocation();

  return (
    <div className="four-oh-four">
      <img src={notFoundIcon} alt="Page not found" />
      <h1>404</h1>
      <blockquote>{location.pathname} Not Found</blockquote>
      <Link to="/">Let's go home</Link>
    </div>
  );
}

export default FourOhFour;
