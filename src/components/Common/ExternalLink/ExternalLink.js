import "./ExternalLink.css";
import { externalLinkIcon } from "assets/icons";

function ExternalLink({ to, children }) {
  return (
    <a className="no-default" href={to} target="_blank" rel="noreferrer">
      <span className="external-link-text">{children}</span>
      <img className="external-link-icon" src={externalLinkIcon} alt="External link icon" />
    </a>
  );
}

export default ExternalLink;
