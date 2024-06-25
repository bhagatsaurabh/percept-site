import "./Footer.css";
import { githubIcon } from "assets/icons";

function Footer() {
  return (
    <footer>
      <div className="footer-section left">
        <a href="https://github.com/bhagatsaurabh/percept" target="_blank" rel="noreferrer">
          <img className="footer-icon" src={githubIcon} alt="Star Percept GitHub repository" />
        </a>
      </div>
      <div className="footer-section right">
        <span>&copy; 2021-present | Saurabh Bhagat</span>
      </div>
    </footer>
  );
}

export default Footer;
