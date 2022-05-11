import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Live from "../Live/Live";
import "./CodeLive.css";
import { liveIcon, codeIcon } from "assets/icons";
import Code from "../Code/Code";

function CodeLive({ snippet, language, title, type, defaultTab }) {
  let initialRun = "play";
  if (type === "tab" && (defaultTab === 0 || typeof defaultTab !== "number")) initialRun = "stop";

  const [run, setRun] = useState(initialRun);
  const [tab, setTab] = useState(defaultTab ?? 0);
  const [executableCode, setExecutableCode] = useState();
  const navigate = useNavigate();

  const onEditHandler = () => {
    navigate("/playground", { state: snippet });
  };
  const onLoadHandler = (code) => {
    if (code) {
      setExecutableCode(code);
    }
  };
  const tabHandler = (tabIndex) => {
    setTab(tabIndex);
    setRun(tabIndex === 0 ? "stop" : "play");
  };

  const controlHandler = () => {
    setRun(run === "play" ? "stop" : "play");
  };

  return (
    <div className={`code-live ${type}`}>
      <div className="head">
        <span className="title">{title}</span>
        {type === "tab" && (
          <nav className="nav">
            <ul>
              <li>
                <button className={tab === 0 ? "active" : ""} onClick={() => tabHandler(0)}>
                  <img className="tab-icon" src={codeIcon} alt="Open code tab" />
                </button>
              </li>
              <li>
                <button className={tab === 1 ? "active" : ""} onClick={() => tabHandler(1)}>
                  <img className="tab-icon" src={liveIcon} alt="Open live tab" />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className="body">
        <div className={`${type} ${tab === 0 ? "active" : ""}`}>
          <Code
            snippet={snippet}
            language={language}
            editable
            onEdit={onEditHandler}
            onLoad={onLoadHandler}
            showLineNo
          ></Code>
        </div>
        <div className={`${type} ${tab === 1 ? "active" : ""}`}>
          <Live state={run} onControl={controlHandler} code={executableCode} />
        </div>
      </div>
    </div>
  );
}

export default CodeLive;
