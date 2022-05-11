import "./HeaderSection.css";

function HeaderSection({ align, children }) {
  return <div className={`header-section ${align}`}>{children}</div>;
}

export default HeaderSection;
