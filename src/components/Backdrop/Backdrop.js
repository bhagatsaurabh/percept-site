import "./Backdrop.css";

function Backdrop({ show, onDismiss }) {
  return show && <div className="backdrop" onClick={onDismiss}></div>;
}

export default Backdrop;
