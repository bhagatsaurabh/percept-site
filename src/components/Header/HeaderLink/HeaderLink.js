import { NavLink } from "react-router-dom";
import "./HeaderLink.css";

function HeaderLink({ text, to }) {
  const classes = "header-link no-default";

  return (
    <NavLink
      className={(navData) => (navData.isActive ? `${classes} active` : `${classes}`)}
      to={to}
    >
      {text}
    </NavLink>
  );
}

export default HeaderLink;
