import "./Navbar.css";

function Navbar({ children }) {
  return (
    <nav>
      <ul>
        {children.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
