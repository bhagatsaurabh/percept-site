import { useRef, useEffect, useState } from "react";
import { allowIFrame, debounce, sandboxIFrame, toBlobURL } from "utils/utils";

import "./Live.css";
import { runIcon, pauseIcon, reloadIcon } from "assets/icons";
import SuspenseOverlay from "../SuspenseOverlay/SuspenseOverlay";
import LiveConsole from "components/LiveConsole/LiveConsole";

function Live({ code, onControl, state, deferred, resizing }) {
  const iframeEl = useRef(null);
  const [templateURL, setTemplateURL] = useState(toBlobURL(window.LIVE_TEMPLATE_RAW, "text/html"));
  const [timerId, setTimerId] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const codeChanged = () => {
    if (deferred) {
      setTimerId(debounce(sendCode, timerId, deferred));
    } else {
      sendCode();
    }
  };

  const sendCode = () => {
    if (state === "stop") onControl();
    setTemplateURL(
      toBlobURL(window.LIVE_TEMPLATE_RAW.replace("/*CODE_PLACEHOLDER*/", code), "text/html")
    );
    setIsLoading(true);
  };

  useEffect(codeChanged, [code]);

  useEffect(() => {
    if (state === "play") {
      iframeEl.current.contentWindow?.PERCEPT_INSTANCES?.[0]?.resume();
    } else {
      iframeEl.current.contentWindow?.PERCEPT_INSTANCES?.[0]?.stop();
    }
  }, [state]);

  const onReload = () => {
    setIsLoading(true);
    iframeEl.current.contentWindow?.location.reload();
  };

  return (
    <div className="live-container">
      <button onClick={onControl} className="live-control">
        <img
          className={`live-control-icon ${state === "stop" ? "active" : ""}`}
          src={runIcon}
          alt="Resume live run"
        />
        <img
          className={`live-control-icon ${state === "play" ? "active" : ""}`}
          src={pauseIcon}
          alt="Resume live run"
        />
      </button>
      <button onClick={onReload} className="live-control reload">
        <img className="live-control-icon" src={reloadIcon} alt="Reload live run" />
      </button>
      <iframe
        allow={allowIFrame}
        allowFullScreen={true}
        sandbox={sandboxIFrame}
        key={templateURL}
        src={templateURL}
        ref={iframeEl}
        className="live-iframe"
        title="Percept Live Playground"
        onLoad={() => setIsLoading(false)}
      ></iframe>
      <div style={{ display: resizing ? "block" : "none" }} className="resize-cover"></div>
      {isLoading && (
        <SuspenseOverlay warnTimeout={6000}>
          <p>Running</p>
        </SuspenseOverlay>
      )}
      <LiveConsole iframeRef={iframeEl.current} />
    </div>
  );
}

export default Live;
