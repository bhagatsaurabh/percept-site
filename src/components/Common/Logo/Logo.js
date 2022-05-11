import { NavLink } from "react-router-dom";

import logo from "assets/images/base-logo-small.png";
import "./Logo.css";

function Logo() {
  return (
    <NavLink className="no-default" to="/">
      <img className="logo mr-1" src={logo} alt="Percept logo" />
      <span className="logo-name">Percept</span>
    </NavLink>
  );
}

export default Logo;
