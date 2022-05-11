import { useReducer, useRef } from "react";

import "./PlaygroundNav.css";
import { caretIcon, closeIcon, historyIcon } from "assets/icons";
import { classes } from "utils/utils";
import examplesData from "assets/data/examples.json";
import { CSSTransition } from "react-transition-group";
import Backdrop from "components/Backdrop/Backdrop";

function PlaygroundNav({ onAction }) {
  const [navState, dispatch] = useReducer(
    (state, action) => (state === action.state ? "" : action.state),
    ""
  );
  const menuRef = useRef(null);

  return (
    <div className="playground-nav">
      <span className="playground-title">Playground</span>
      <div className="playground-nav-item">
        <button
          className={classes({ open: navState === "load" })}
          onClick={() => dispatch({ state: "load" })}
        >
          <span>Load</span>
          <img
            className={classes("caret-icon ml-0p5", { open: navState === "load" })}
            src={caretIcon}
            alt="Caret icon"
          />
        </button>
        <Backdrop show={navState === "load"} onDismiss={() => dispatch({ state: "" })} />
        <CSSTransition
          in={navState === "load"}
          classNames="menu"
          mountOnEnter
          unmountOnExit
          timeout={100}
          nodeRef={menuRef}
        >
          <div ref={menuRef} className="menu">
            <h2>
              Load Example
              <button onClick={() => dispatch({ state: "" })}>
                <img src={closeIcon} alt="Close menu" />
              </button>
            </h2>
            <div className="restore-space">
              <button
                onClick={() => {
                  dispatch({ state: "" });
                  onAction({ type: "local-load" });
                }}
                className="restore"
              >
                <img className="restore-icon" src={historyIcon} alt="Restore locally saved" />
                <span style={{ verticalAlign: "middle" }}>Restore locally saved</span>
              </button>
            </div>
            <div className="examples-list">
              {examplesData.map((category) => (
                <section key={category.id}>
                  <h3>{category.name}</h3>
                  <ul>
                    {category.examples.map((example) => (
                      <li key={example.id}>
                        <button
                          onClick={() => {
                            dispatch({ state: "" });
                            onAction({ type: "load", data: example.slug });
                          }}
                        >
                          {example.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default PlaygroundNav;
