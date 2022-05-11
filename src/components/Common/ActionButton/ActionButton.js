import { Link } from "react-router-dom";

import * as icons from "assets/icons";
import "./ActionButton.css";

function ActionButton({ icon, size, to, children, type, state }) {
  return (
    <Link state={state} className={`no-default action-button ${type} ${size}`} to={to}>
      {icon && <img className="icon" src={icons[`${icon}Icon`]} alt={`${icon} icon`} />}
      <span style={{ display: "inline-block", overflow: "hidden" }}>{children}</span>
    </Link>
  );
}

export default ActionButton;
