import React, { useState, useRef, useContext } from "react";
import { allowIFrame, classes, sandboxIFrame } from "utils/utils";

import "./Docs.css";
import SuspenseOverlay from "components/Common/SuspenseOverlay/SuspenseOverlay";
import { ThemeContext } from "utils/theme-context";

const Docs = React.forwardRef((_props, ref) => {
  const [isLoading, setLoading] = useState(true);
  const theme = useContext(ThemeContext);
  const iframeRef = useRef(null);

  const setDocsTheme = () => {
    if (!iframeRef.current.contentDocument) return;
    iframeRef.current.contentDocument.body.className = theme;
  };

  return (
    <div ref={ref} className="docs-container">
      <iframe
        allow={allowIFrame}
        allowFullScreen={true}
        sandbox={sandboxIFrame}
        onLoad={() => {
          setDocsTheme();
          setLoading(false);
        }}
        className={classes("docs-content docs-iframe", { active: !isLoading })}
        title="Percept Docs"
        src="http://docs.percept.saurabhagat.me"
        ref={iframeRef}
      ></iframe>
      {isLoading && (
        <SuspenseOverlay warnTimeout={6000}>
          <p>Loading API</p>
        </SuspenseOverlay>
      )}
    </div>
  );
});

export default Docs;
