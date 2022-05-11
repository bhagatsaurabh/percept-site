import "./ThemeButton.css";
import { lightIcon, darkIcon } from "assets/icons";

function ThemeButton({ theme, onChange }) {
  const lightClasses = ["theme-icon"],
    darkClasses = ["theme-icon"];
  if (theme === "light") lightClasses.push("active");
  else darkClasses.push("active");

  return (
    <button onClick={onChange} className="theme-button">
      <img className={lightClasses.join(" ")} src={lightIcon} alt="Light theme icon" />
      <img className={darkClasses.join(" ")} src={darkIcon} alt="Dark theme icon" />
    </button>
  );
}

export default ThemeButton;
