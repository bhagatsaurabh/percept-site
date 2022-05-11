import { useEffect, useState, useRef } from "react";

import { asyncIcon, warnIcon } from "assets/icons";
import { classes } from "utils/utils";
import "./SuspenseOverlay.css";
import { CSSTransition } from "react-transition-group";

function SuspenseOverlay({ children, warnTimeout }) {
  const [showWarn, setShowWarn] = useState(false);
  const [timer, setTimer] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => setShowWarn(true), warnTimeout);
    setTimer(id);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <CSSTransition in classNames="suspense" mountOnEnter unmountOnExit timeout={100} nodeRef={ref}>
      <div ref={ref} className="suspense-overlay">
        <img className="async-icon" src={asyncIcon} alt="Loading..." />
        {children}
        <p className={classes("slow-net-notification", { show: showWarn })}>
          <span>Slow Network</span>
          <span style={{ marginLeft: "0.5rem" }}>
            <img className="warn-icon" src={warnIcon} alt="Slow network !" />
          </span>
        </p>
      </div>
    </CSSTransition>
  );
}

export default SuspenseOverlay;
